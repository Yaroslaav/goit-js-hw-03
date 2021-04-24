'use strict'
console.log(" ");
console.log(" ");

const countTotalSalary = function (employees) {
  let values = Object.values(employees);
  console.log(values);
  let element = 0;


  // for (let i = 0; i < values.length; i++) {
  //   element = values[i];
    
  // }
  // console.log(element);

  for (let index = 0; index < values.length; index++) {
    element += values[index];
    
  }
  console.log(element);
};

/*
 * Викличи функції для перевірки працездатності твоєї реалізації.
 */
countTotalSalary({}); // 0


  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }); // 330


  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }); // 400