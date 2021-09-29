let a;
do{
    a=parseInt(prompt("Enter A number: "))
} while (Number.isNaN(a));
console.log(`A number is: ${a}`);

let b;
do{
    b=parseInt(prompt("Enter B number: "))
} while (Number.isNaN(b && b > a));
console.log(`B number is: ${b}`);

const skipEvenNumbers = confirm("Skip even numbers?");
console.log(`Skip Even check is: ${skipEvenNumbers}`);

let result = 0;

for(let i = a; i <= b; i++){
    if (skipEvenNumbers && i%2===0){
        continue;
    }
    result += i ;
}

console.log(`Result: ${result}`);
alert (`Result: ${result}`);