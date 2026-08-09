// Utility Type হলো TypeScript-এর তৈরি করা এমন কিছু built-in type, যেগুলো ব্যবহার করে existing type থেকে নতুন type সহজে তৈরি করা যায়।

// Record<keyType, valueType>

type User = {
    id: number;
    name: string;
    email: string;
}

type Users = Record<string, User>;

const users: Users = {
    "user1": {
        id: 1,
        name: "John Doe",
        email: "john@example.com"
    },
    "user2": {
        id: 2,
        name: "Jane Smith",
        email: "jane@example.com"
    },
    "user3": {
        id: 3,
        name: "Alice Johnson",
        email: "alice@example.com"
    }
}

users.user1;



///

const userSkills: Record<number, string[]> = {
    1: ["TypeScript", "React", "Node.js"],
    2: ["Python", "Django", "Flask"],
    3: ["Java", "Spring Boot", "Hibernate"]
};

userSkills[1]; // ["TypeScript", "React", "Node.js"]


//////
type Status = "active" | "inactive" | "pending";

const messages: Record<Status, string> = {
    "active": "User is active",
    "inactive": "User is inactive",
    "pending": "User has pending actions"   
}

console.log(messages.active); // Output: "User is active"
console.log(messages.inactive); // Output: "User is inactive"
console.log(messages.pending); // Output: "User has pending actions"