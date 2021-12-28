import { getTotal } from "./utils";
import {rate}  from "./test";
import "./test.css";


const testVar = 100;
const anotherTestCar = 100;
console.log(testVar + anotherTestCar);
console.log("test");
if(testVar){
    console.log("cмотришь?");
}

const products = [{
    price: 100,
    count: 2
}]

console.log(getTotal(products))