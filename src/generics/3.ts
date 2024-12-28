function merge<T extends object, U extends object>(objA: T, objB: U): T & U {
    return Object.assign({}, objA, objB);
}

const objA = { name: "John", age: 30 };
const objB = { position: "Developer", isActive: true };

const result = merge(objA, objB);
console.log(result);