// Readonly — পরিবর্তন করা যাবে না

type User = {
    id: number;
    name: string;
}

const user: Readonly<User> = {
    id: 2,
    name: "Martin"
}

// user.name = "Moin"