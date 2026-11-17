type ApiResult<T, E> = {
  data: T;
  error: E | null;
};

type Product = {
  id: number;
  name: string;
  price: number;
};

type ApiError = {
  statusCode: number;
  message: string;
};

const response: ApiResult<Product, ApiError> = {
  data: {
    id: 1,
    name: "Laptop",
    price: 1200,
  },
  error: {
    statusCode: 404,
    message: "Product not found",
  },
};

console.log("API Response: ", response);

function getId<T extends { id: number }>(item: T) {
  return item.id;
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
  content: { name: "Alice", age: 30 },
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
};

const userResponse: ApiResponse<User> = {
  data: { id: 1, name: "Alice", email: "alice@example.com" },
  success: true,
  message: "User found",
};
console.log("User Response: ", userResponse);

const productResponse: ApiResponse<Product> = {
  data: { id: 1, name: "Laptop", price: 1200 },
  success: true,
  message: "Product found",
};
console.log("Product Response: ", productResponse);

//******** keyof typeof*****/ */
const orderStatus = {
  pending: "Pending",
  processing: "Processing",
  delivered: "Delivered",
};

type OrderStatusKeys = keyof typeof orderStatus; // "pending" | "processing" | "delivered"

const status: OrderStatusKeys = "pending"; // Valid
console.log("Order Status: ", orderStatus[status]);

const TASK_STATUS = {
  TODO: "todo",
  IN_PROGRESS: "in-progress",
  COMPLETED: "completed",
} as const;

type TaskStatusKeys = keyof typeof TASK_STATUS; // "TODO" | "IN_PROGRESS" | "COMPLETED"

type TaskStatusValues = (typeof TASK_STATUS)[TaskStatusKeys]; // "todo" | "in-progress" | "completed"

//
const API_ENDPOINTS = {
  USERS: "/api/users",
  PRODUCTS: "/api/products",
  ORDERS: "/api/orders",
} as const;

type EndpointName = keyof typeof API_ENDPOINTS;
type EndpontKeys = keyof typeof API_ENDPOINTS;
type EndpointValues = typeof API_ENDPOINTS[keyof typeof API_ENDPOINTS];
 const endpoint: EndpointValues = "/api/orders"; // Valid
 console.log("API Endpoint: ", endpoint);


/******=== keyof with Union & Intersection Types ==*** */
type User2 = {
  id: number;
  name: string;
  phone: string;
  email: string;
};

type Admin = {
  id: number;
  name: string;
  role: string;
  phone: string;
};

type Person2 = User2 | Admin;

type PersonKeys = keyof Person2; // "id" | "name" | "phone" |

function getPersonProperty<T extends Person2>(person: T, key: PersonKeys) {
  return person[key];
}

const user: User2 = { id: 1, name: "Alice", phone: "123-456-7890", email: "alice@example.com" };

console.log("User Name: ", getPersonProperty(user, "name"));
console.log("User Phone: ", getPersonProperty(user, "phone"));
console.log("User Email: ", getPersonProperty(user, "email")); // invalid



// keyof with Intersection Types (&)
type UserAdmin = User2 & Admin;

type UserAdminKeys = keyof UserAdmin; // "id" | "name" | "phone" | "email" | "role"

function getUserAdminProperty<T extends UserAdmin>(userAdmin: T, key: UserAdminKeys) {
  return userAdmin[key];
}

const userAdmin: UserAdmin = {
  id: 1,
  name: "Alice",
  phone: "123-456-7890",
  email: "hello@example.com",
  role: "Admin" 
};

console.log("User Admin ID: ", getUserAdminProperty(userAdmin, "id"));
console.log("User Admin Name: ", getUserAdminProperty(userAdmin, "name"));
console.log("User Admin Phone: ", getUserAdminProperty(userAdmin, "phone"));
console.log("User Admin Email: ", getUserAdminProperty(userAdmin, "email"));
console.log("User Admin Role: ", getUserAdminProperty(userAdmin, "role"));


type Product3 = {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
};

type ProductKeys = keyof Product3; // "id" | "name" | "price" | "inStock"
type ProductValues = Product3[keyof Product3];

function getProductProperty<T, k extends keyof T>(product: T, key: k): T[k] {
  return product[key];
}

const product: Product3 = { id: 1, name: "Laptop", price: 1200, inStock: true };
console.log("Product Name: ", getProductProperty(product, "name"));
console.log("Product Price: ", getProductProperty(product, "price"));
console.log("Product In Stock: ", getProductProperty(product, "inStock"));