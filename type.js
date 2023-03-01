// js is dynamic typed language

// primitive type
const a = 5;
const b = "John Doe";
const c = true;

console.log(`a = ${a} , b = ${b} , c = ${c}`);
// check type of variable
console.log(`a = ${typeof a} , b = ${typeof b} , c = ${typeof c}`);

// non-primitive type
const d = [10,15,'Anna'];
const e = {
           firstName:"John",
           lastName:"Doe",
           age:00,
           hobbies:["Design","Creativity"]
          };
console.log(`d = ${d}`);
console.log(`e = ${e}`);
console.log(e);


// memory address
const x = 5;
// refer the same address for y
let y = x;
console.log(x,y);
// assign different value(memory address for y)
y=7;
console.log(x,y);


const p = { job:"Web Developer"};
let q = p;
console.log(p,q);
// assign different value

// q = {job:"Frontend Developer"};
// console.log(p,q);

// changing the previously referenced value
q.job="Backend Developer";
console.log(p,q);