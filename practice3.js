const calculation = (num1,num2,operation)=>{
    switch(operation){
        case 'add':
            console.log(num1+num2);
            break;
        case 'subtract':
            console.log(num1-num2);
            break;
        case 'multiply':
            console.log(num1*num2);
            break;
        case 'divide':
            console.log(num1/num2);
            break;
        case 'modulus':
            console.log(num1%num2);
            break;
        default:
            console.log("Invalid operations");
    }
}
calculation(10,2,'add');