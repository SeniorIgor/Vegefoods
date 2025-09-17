const Category = require('./Category');
const Product = require('./Product');
const path = require('path');

class InsertData {
  static createCategory = async ({ name, value }) => {
    const category = new Category({ name, value });
    await category.save();
  };

  static createProduct = async ({
    name,
    categoryName,
    price,
    stocks,
    unit,
    description,
    nameImg,
    reviewQuantity,
    rating,
    sold,
    discount
  }) => {
    // 1) Find category by name
    const category = await Category.findOne({ name: categoryName }).lean();
    if (!category) throw new Error(`Category not found: ${categoryName}`);

    // 2) Build image URLs (POSIX for URLs)
    //    /images/product-12.jpg  → preview: /images/product-12-min.jpg
    const imageUrl = path.posix.join('/images', nameImg);
    const parsed = path.posix.parse(imageUrl);
    const previewUrl = path.posix.join(parsed.dir, `${parsed.name}-min${parsed.ext}`);

    // 3) Compute required price fields
    const oldPrice = Number(price);
    const disc = Number(discount) || 0;
    const newPrice = disc > 0
      ? Number((oldPrice * (1 - disc / 100)).toFixed(2))
      : oldPrice;

    // 4) Create and save product
    const product = new Product({
      name,
      categoryId: category._id,
      oldPrice,
      newPrice,
      stocks,
      unit,
      description,
      imageUrl,
      previewUrl,
      reviewQuantity,
      rating,
      sold,
      discount: disc,
    });

    await product.save();
    return product;
  };
}

module.exports = InsertData;