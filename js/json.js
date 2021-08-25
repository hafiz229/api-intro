// JavaScript Object Notation
// JSON
const user = { id: 11, name: "Amir Khan", job: "actor" };
const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified);

const shop = {
  name: "Alia Store",
  address: "Elephant road",
  products: ["laptop", "mobile", "pepsi"],
  profit: 15000,
  owner: {
    name: "Muhit",
    profession: "Doctor",
  },
  inExpensive: false,
};

const shopStringified = JSON.stringify(shop);
// console.log(shop);
console.log(shopStringified);
const converted = JSON.parse(shopStringified);
console.log(converted);
