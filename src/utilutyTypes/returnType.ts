// ReturnType — function কী return করে সেটা বের করা

// type User = {
//     id: number;
//   name: string;
//   email: string; 
// }

// function getUser() {
//     return {
//         id: 1,
//         name: "Bob",
//         email: "bob@gmail.com"
//     }
// }

// const user: User = getUser();

// user.email

// type User = ReturnType<typeof getUser>



/////////////

type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  age: number;
};

// Public user
type PublicUser = Omit<User, "password">

// Login user
type LoginUser = Pick<User, "id" | "name">

// Update user
type UpdateUser = Partial<User>

// User database
type UserDatabase = Record<string, User>
const users: UserDatabase = {
    user1: {
        id: 1,
        name: "Safiul",
        email: "saiful@gmail.com",
        password: "1234",
        age: 60
    }
}

///৫. API function

async function getUser() {
    return {
        id: 1,
        name: "Saiful",
        email: "saiful@example.com" 
    }
}

type FetchUserResult = ReturnType<typeof getUser>  

type FetchedUser = Awaited<ReturnType<typeof getUser>>

// function handleUserResponse(result: FetchUserResult) {
//     console.log(result)
// }

// handleUserResponse(getUser())



//. FetchedUser practical use
function printUser(user: FetchedUser) {
    console.log(user.id)
    console.log(user.name);
    console.log(user.email)
}

async function main() {
    const user = await getUser();
    printUser(user)
}
main()




/// exercise

async function getProduct() {
  return {
    id: 101,
    title: "iPhone",
    price: 999
  };
}

type ProductResult = ReturnType<typeof getProduct>;

type Product = Awaited<ProductResult>


function showProduct(product: Product) {
    console.log(`ID: ${product.id}`);
    console.log(`Title: ${product.title}`);
    console.log(`Price: ${product.price}`);
}

async function main2 () {
    const product = await getProduct();
    showProduct(product)
}
main2();