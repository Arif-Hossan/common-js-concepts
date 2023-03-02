// primitive are pass by value
const num1 = 5;
const num2 = 7;
function multiply(a,b){
    a=2;
    const result = a*b;
    return result;
}
console.log(num1);
const first = multiply(num1,num2);
console.log(first);
console.log(num1);

// non-primitive are pass by reference
const student1= {name:'Tom',partner:"Julie"};
const student2= {name:'Hanks',partner:"Rosa"};

function makeMovie(couple1,couple2){
    couple1.name="Jolil";
    couple2.partner="Borsha";
}
console.log(student1,student2);
makeMovie(student1,student2);
console.log(student1,student2);