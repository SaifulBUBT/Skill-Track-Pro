class Storage<T> {
    value: T;

    constructor(value: T) {
        this.value = value;
    }

    getValue(): T {
        return this.value;
    }
}

const stringStorage = new Storage<string>("Hello, World!");
const numberStorage = new Storage<number>(42);

console.log("String Storage Value: ", stringStorage.getValue());
console.log("Number Storage Value: ", numberStorage.getValue());


//***************/
class Repository<T> {
    private items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }

    getAll():T[] {
        return this.items;
    }
}

interface Product {
    id: number;
    title: string;
    price: number;
}

const productRepository = new Repository<Product>();
productRepository.add({ id: 1, title: "Laptop", price: 1200 });
productRepository.add({ id: 2, title: "Phone", price: 800 });

console.log("All Products: ", productRepository.getAll());


type Customer = {
    id: number;
    name: string;
}

class Store<T> {
    value: T;

    constructor(value: T) {
        this.value = value;
    }
    getValue(): T {
        return this.value;
    }
}

const customerStore = new Store<Customer>({ id: 1, name: "Alice" });
console.log("Customer Store Value: ", customerStore.getValue());




//Generic constraints and generic class
class Shop<T extends {id: number}> {
    private items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }

    getAll(): T[] {
        return this.items;
    }

    getById(id: number): T | undefined {
        return this.items.find(item => item.id === id);
    }

    update(id: number, updatedItem: Partial<T>): boolean {
        const index = this.items.findIndex(item => item.id === id);
        if (index !== -1) {
            this.items[index] = { ...this.items[index], ...updatedItem };
            return true;
        }
        return false;
    }

    delete(id: number): boolean {
        const index = this.items.findIndex(item => item.id === id);
        if (index !== -1) {
            this.items.splice(index, 1);
            return true;
        }
        return false;
    }
}

type Item = {
    id: number;
    name: string;
}

const shop = new Shop<Item>();
// Adding items to the shop
shop.add({ id: 1, name: "Monitor" });
shop.add({ id: 2, name: "keyboard" });
console.log("Item with ID 1: ", shop.getById(1));

// Read 
console.log("All Items: ", shop.getAll());
console.log(shop.getById(1));

// Update
const updateResult = shop.update(1, { name: "Updated Monitor" });
console.log("Update Result: ", updateResult);
console.log("All Items after update: ", shop.getAll());



/********================******** */
interface User {
    id: number;
    name: string;
    email: string;
}

interface IRepository<T> {
    add(item: T): void;
    getAll(): T[];
    getById(id: number): T | undefined;
    update(id: number, updatedItem: Partial<T>): boolean;
    delete(id: number): boolean;
}

class MemoryRepository<T extends { id: number }> implements IRepository<T> {
    private items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }

    getAll(): T[] {
        return this.items;
    }

    getById(id: number): T | undefined {
        return this.items.find(item => item.id === id);
    }

    update(id: number, updatedItem: Partial<T>): boolean {
        const index = this.items.findIndex(item => item.id === id);
        if (index !== -1) {
            this.items[index] = { ...this.items[index], ...updatedItem };
            return true;
        }
        return false;
    }

    delete(id: number): boolean {
        const index = this.items.findIndex(item => item.id === id);
        if (index !== -1) {
            this.items.splice(index, 1);
            return true;
        }
        return false;
    }
}

const userRepository = new MemoryRepository<User>();
userRepository.add({ id: 1, name: "Alice", email: "alice@example.com" });
userRepository.add({ id: 2, name: "Bob", email: "bob@example.com" });

console.log("User with ID 1: ", userRepository.getById(1));
console.log("All Users: ", userRepository.getAll());

userRepository.update(1, { name: "Updated Alice" });
console.log("All Users after update: ", userRepository.getAll());

const productRepository2 = new MemoryRepository<Product>();
productRepository2.add({ id: 1, title: "Laptop", price: 1200 });
productRepository2.add({ id: 2, title: "Phone", price: 800 });
console.log("All Products: ", productRepository2.getAll());

productRepository2.update(1, { price: 1300 });
console.log("All Products after update: ", productRepository2.getAll());

productRepository2.getById(2);
// productRepository2.delete(2);