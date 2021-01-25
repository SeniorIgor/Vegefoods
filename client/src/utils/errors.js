export class ValidationError extends Error {
	constructor(message, data = null) {
		super(message);

		this.name = "ValidationError";
		this.data = data;
	}
}

export class AuthorizationError extends Error {
	constructor(message, isOldToken) {
		super(message);

		this.name = "AuthorizationError";
		this.isOldToken = isOldToken;
	}
}