// Pick — existing type থেকে কিছু property নেওয়া

// Formula
// Pick<OriginalType, "property1" | "property2">

type User = {
    id: number;
    name: string;
    email: string;
    age: number;
    isActive: boolean;
}

type UserProfile = Pick<User, "id" | "name" | "email">;

const userProfile: UserProfile = {
    id: 1,
    name: "Alex",
    email: "alex@gmail.com"
}

////

type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
    stock: number;
}

type ProductCard = Pick<Product, "id" | "title" | "price">

const productCard: ProductCard = {
    id: 1,
    title: "Audi Q9",
    price: 5122656
}