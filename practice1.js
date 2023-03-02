/*
const case1=[];
const case2=true;
if(case1===case2){
 console.log('Value is true');
}
else{
    console.log('Value is false');
}
*/
const case1=true;
const case2='true';
if(case1===case2){
 console.log('Value is true');
}
else{
    console.log('Value is false');
}

// check the parameter is number or not
const isNumber = (value)=>{
    if(typeof value==='number'){
        console.log("its number");
    }else{
        console.log("its not a number");
    }
}
isNumber('A');