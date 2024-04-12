import { v4 as uuidv4 } from 'uuid';

type vehicle = {
    id: string;
    name: string;
    price: number;
    description: string;
};


type user = {
    id: string;
    name: string;
    age: number;
    cart: (vehicle)[];
}


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



function addToCart(user: user, item: vehicle): void {
    user.cart.push(item);
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