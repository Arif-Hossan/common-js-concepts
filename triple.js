// always use triple equal for comparison
// equal comparison doesn't work for array and objects
// 1=true 0 =false
const a = 0;
const b = false;
if (a===b){
    console.log('value is truthy');
}
else {
    console.log('value is falsy');
}
// type coercion
// type casting
// type conversion