'use strich'

console.log(" ");
console.log(" ");

const countProps = function (obj = {}) {
  let value = Object.values(obj)
  console.log(value);
  let lenght = value.length
  console.log(lenght);
};

/*
 * Викличи функції для перевірки працездатності твоєї реалізації.
 */
countProps({}); // 0

countProps({ name: 'Mango', age: 2 }); // 2

countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }); // 3