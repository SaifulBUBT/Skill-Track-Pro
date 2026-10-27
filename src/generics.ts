type ApiResult<T, E> = {
    data: T,
    error: E | null;
}

type Product = {
    id: number;
    name: string;
    price: number;
}

type ApiError = {
    statusCode: number;
    message: string;
}

const response: ApiResult<Product, ApiError> = {
    data: {
        id: 1,
        name: "Laptop",
        price: 1200,
    },
    error: {
        statusCode: 404,
        message: "Product not found",
    }
}

console.log("API Response: ", response);