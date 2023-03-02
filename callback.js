function greeting (greetingHandler,name){
    greetingHandler(name);
}
// const something =[1,2,3]
function greetingHandler (name){
    console.log("Good Morning",name);
}
function greetEvening (name){
    console.log('Good Evening',name);
}
// const something= {name:"Lenovo",ram:8}
greeting(greetingHandler,"Tom");
greeting(greetEvening,'Tom Cruse')