let users = [
  { name: "Kiril", age: 28 },
  { name: "Bogdan", age: 18 },
  { name: "Alla", age: 32 },
  { name: "Misha", age: 43 },
  { name: "Artem", age: 40 },
  { name: "Nikita", age: 21 },
  { name: "Oleg", age: 47 },
];

let sumAge = users.reduce((acc, user) => (acc += user.age), 0);
let everageAge = Math.round(sumAge / users.length);
console.log(everageAge);

let usersObj = users.reduce((acc, user) => {
  acc[user.name] = user;
  return acc;
}, {});
console.log(usersObj);

let user = {
  name: "Denis",
  age: 45,
};

user.lastName = "Poveda";

let usersObj2 = {
  Kiril: {
    name: "Kiril",
    age: 28,
  },
  Bogdan: {
    name: "Bogdan",
    age: 18,
  },
  Alla: {
    name: "Alla",
    age: 32,
  },
  Ihor: {
    name: "Ihor",
    age: 41,
  },
};

usersObj2.Ihor = {
  name: "Ihor",
  age: 41,
};
