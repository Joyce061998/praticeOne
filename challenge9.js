/*
Challenge 9: Mixing Data Types

Declare an object `person` with properties `name: "John"`, `age: 25`, `isStudent: true`.
Add an array `courses` with "Math", "Science", "History".
Log the `name` and the first course from `person.courses`.
*/

let person =
{
    personName: "John", 
    personAge: 25 ,
    isStudent: true

}

courses = ["Math", "Science", "History"];

console.log(person.personName + " " + courses[0]);
