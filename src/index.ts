import { v4 as uuidv4 } from 'uuid';




//Vehicle class Start
class Vehicle {
    private _id: string;
    private _name: string;
    private _price: number;
    private _description: string;

    constructor(name: string, price: number, description: string) {
        this._id = uuidv4();
        this._name = name;
        this._price = price;
        this._description = description;
    }

    get id(): string {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get price(): number {
        return this._price;
    }

    set price(value: number) {
        this._price = value;
    }

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }
}
//Vehicle class end

//User class start
class User {
    private _id: string;
    private _name: string;
    private _age: number;
    private _cart: Vehicle[];

    constructor(name: string, age: number) {
        this._id = uuidv4();
        this._name = name;
        this._age = age;
        this._cart = [];
    }

    get id(): string {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        this._age = value;
    }

    get cart(): Vehicle[] {
        return this._cart;
    }

    set cart(value: Vehicle[]) {
        this._cart = value;
    }
    addToCart(item: Vehicle): void {
        this._cart.push(item);
    }
    removeFromCart(itemId: string): void {
        this._cart = this._cart.filter(item => item.id !== itemId);
    }
}
//User class end

function createUser(name: string, age: number): user {
  return {
    id: uuidv4(),
    name: name,
    age: age,
    cart: [],
  };
}


function createItem(name: string, price: number, description: string): vehicle {
    return {
        id: uuidv4(),
        name: name,
        price: price,
        description: description,
    };
}






function removeFromCart(user: user, itemId: string): void {
user.cart = user.cart.filter(item => item.id !== itemId);
}



function removeQuantityFromCart(user: user, itemId: string, quantity: number): void {
    let itemsToRemove = quantity;
    user.cart = user.cart.filter(item => {
        if (item.id === itemId && itemsToRemove > 0) {
            itemsToRemove--;
            return false;
        }
        return true;
    });
}



function cartTotal(user: user): number {
    return user.cart.reduce((total, item) => total + item.price, 0);
}

function printCart(user: user): void {
    user.cart.forEach(item => console.log(item));
}


let newUser1 = createUser("Mike Welborn", 33);
console.log(newUser1);


let newVehicle1 = createItem("Tesla Model S", 79000, "Electric car");



let newVehicle2 = createItem("Mazda CX-5", 25000, "SUV");



let newVehicle3 = createItem("Toyota Camry", 24000, "Sedan");


addToCart(newUser1, newVehicle1);
printCart(newUser1);
console.log(cartTotal(newUser1));


addToCart(newUser1, newVehicle2);
addToCart(newUser1, newVehicle2);
addToCart(newUser1, newVehicle2);

printCart(newUser1);
console.log(cartTotal(newUser1));


addToCart(newUser1, newVehicle3);
addToCart(newUser1, newVehicle3);
addToCart(newUser1, newVehicle3);

printCart(newUser1);
console.log(cartTotal(newUser1));

removeFromCart(newUser1, newVehicle2.id);

printCart(newUser1);
console.log(cartTotal(newUser1));

removeQuantityFromCart(newUser1, newVehicle3.id, 2);

printCart(newUser1);
console.log(cartTotal(newUser1));