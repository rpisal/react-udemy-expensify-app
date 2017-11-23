//Object Restructuring
// const person = {
//     name: 'Rahul',
//     age: 41,
//     location: {
//         city: 'Dubai',
//         temperature: 80
//     }
// };

// const { name, age } = person;

// console.log(`${name} is ${age}.`);

// if(person.location.city && person.location.temperature) {
//     console.log(`It's ${person.location.temperature} in ${person.location.city}`);
// }

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName);

// Array Restructuring

const address = ['1299 s. Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

const [ address_line, city, state, zip_code ] = address;

console.log(`You are in ${city} ${state}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [item_name, small, medium, large] = item;
console.log(`A medium ${item_name} costs ${medium}`);