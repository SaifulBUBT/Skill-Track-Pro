// Partial — সব property optional

type User = {
    name: string;
    email: string;
    age: number;
}

type UpdateUser = Partial<User>

const update: UpdateUser = {
    email: "asd@gmail.com"
}