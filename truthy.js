/* Truthy
1.true
2.any number (+ve or -ve)
3.any string (' ','0','false')
4.objects,array (even [],{})
*/

/* Falsy
1.false
2. 0 (zero)
3. empty string
4.undefined,null
*/

const a = {a:2};
if(a){
    console.log("value is truthy");
}
else{
    console.log('value is falsy');
}

// check falsy value
const y = null
if (!y){
    console.log('value is falsy');
}
// check truthy value
const z ={}
if(!!z){
    console.log('value is truthy');
}