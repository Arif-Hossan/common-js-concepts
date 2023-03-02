function sum (a,b,c){
    console.log(arguments);//return array like objects
    // converting arguments to array
    const arg =[...arguments];
    console.log(arg);
    const result = a+b+c;
    return result;
}
// const first = sum(4,5,6);
const first = sum(4,5,6,7,8);
console.log(first);