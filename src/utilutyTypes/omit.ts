// Omit — existing type থেকে কিছু property বাদ দেওয়া

// Pick-এর উল্টো concept হলো Omit।

// Formula
// Omit<OriginalType, "propertyToRemove">


type User = {
    id: number;
    name: string;
    email: string;
    age: number;
    password: string;
}

type SafeUSer = Omit<User, "age" | "password">

const safeUser: SafeUSer = {
    id: 1,
    name: "Bob",
    email: "bob@gmail.com",
}