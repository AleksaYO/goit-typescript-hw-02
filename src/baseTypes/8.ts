/*
  Створіть тип "Gender", використовуючи union type, 
  який може містити значення "male", "female". Створіть змінну myGender цього типу.
*/

type Gender = string;

let myGender: Gender;
myGender = "male";

console.log(myGender);

export {};
