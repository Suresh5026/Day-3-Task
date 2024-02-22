let obj1 = { name : "Suresh", age : 28 };
let obj2 = { age : 28, name : "Suresh" };
let isEqual = true;
if(Object.keys(obj1).length === Object.keys(obj2).length){
    console.log("Object length is same")
    for(let key in obj1){
        if(obj1[key] !== obj2[key]){
            isEqual = false;
            console.log(key,"value is not same");
        }else{
            console.log(key,"Value is same")
        }
    }
}else{
    console.log("Object length is different");
}