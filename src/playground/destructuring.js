// const person = {
//   name: "Toni",
//   age: "32",
//   location : {
//     city: "Gijón",
//     temp: 22,
//   }
// }

// const { name = "Anonymous" , age } = person;
// console.log(`${name} is ${age}.`)

// const {temp: temperature, city } = person.location;
// if (city && temperature) {
//   console.log(`Its ${temperature} in ${city}`);
// }

// const book = {
//   title: "Ego is the Enemy",
//   author: "Ryan Holiday",
//   publisher: {
//     name: "Penguin",
//   },
// }

// const { name: publisherName = "Self-published" } = book.publisher;
// console.log(publisherName);

const address = ["1 Pintor luis pardo", "Gijón", "Asturias", "33204"];

const [, ciudad, provincia] = address;
console.log(`You are in ${ciudad} ${provincia}`)

const item = ["Cafe", "2€", "2.50€", "2.75€"];
const [cafe = "Café caliente", , mediumPrice] = item;
console.log(`A medium ${cafe} costs ${mediumPrice}`);