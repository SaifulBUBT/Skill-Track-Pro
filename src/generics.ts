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

function getId<T extends {id: number}>(item: T) {
    return item.id
}

getId({ id: 1, name: "Alice" }); // Valid



// generic interface
interface Box<T> {
    content: T;
}

interface Person {
    name: string;
    age: number;
}

const numberBox: Box<number> = { content: 123 };
console.log("Number Box: ", numberBox);

const stringBox: Box<string> = { content: "Hello" };
console.log("String Box: ", stringBox);

const personBox: Box<Person> = {
    content: { name: "Alice", age: 30 }
};
console.log("Person Box: ", personBox);


//*************/ */
interface ApiResponse<T> {
    data: T;
    success: boolean;
    message: string;
}

type User = {
    id: number;
    name: string;
    email: string;
}

const userResponse: ApiResponse<User> = {
    data: { id: 1, name: "Alice", email: "alice@example.com" },
    success: true,
    message: "User found"
};
console.log("User Response: ", userResponse);

const productResponse: ApiResponse<Product> = {
    data: { id: 1, name: "Laptop", price: 1200 },
    success: true,
    message: "Product found"
};
console.log("Product Response: ", productResponse);
