const person = {
    name: 'Rahul',
    age: 41,
    location: {
        city: 'Dubai',
        temperature: 80
    }
};

const { name, age } = person;

console.log(`${name} is ${age}.`);