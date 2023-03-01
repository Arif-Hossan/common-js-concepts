// 8 ways to get undefined

// 1.variable that is not initialized will give undefined
let a;
console.log(a);

// 2.function with no return
function sum (a, b){
 const total= a + b;
}
const result = sum (5,6);
console.log(result);

// 3. (in function) parameter that is not pass will be undefined

function third (x, y, z, p){
    const total = x+y+z+p;
    console.log(x,y,z,p);
}
third(2,3);

// 4. if return right side is explicitly describe will return undefined
function isNegative (a,b){
    if(a < 0 || b < 0){
        return
    }
    return a+b;
}
// const result2 = isNegative(2,5);//7
const result2 = isNegative(2,-5);//7
console.log(result2);

// 5.if you want to access any object property that you did not define before or that's not available in the object
const person = {id:1,name:"Hasmot"};
console.log(person.name,person.salary);

// 6. Accessing array elements outside of array index
const numbers = [0,10,24,58];
console.log(numbers[1],numbers[100]);

// 7. deleting an element inside array

// do not use ,rather use splice
delete numbers[1];//this is create a empty hole  in the array
console.log(numbers[1],numbers[100]);
console.log(numbers);

// 8. set variable directly to undefined
const eight =undefined//not use
const nine = null//proper way if necessary
const data = {result:[],updated:null}

console.log(typeof undefined);
console.log(typeof null);
