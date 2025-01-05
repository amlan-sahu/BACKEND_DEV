class ApiResponse {
    constructor(statusCode, message = "Scuccess", data) {
        this.statusCode = statusCode;
        this.message = message;
        this.data = data;
        this.success = statusCode < 400
    }
}