const getRandomArray = (length, min, max)  => {
    let rArr =[];
    for (let i = 0; i <length; i++){
        rArr.push(Math.round(min + Math.random() * (max - min)));
    }
    return rArr;
}
console.log(getRandomArray(15, 1, 100));

const getAverage = (...numbers) => {
    const avrg = numbers
	.filter(number => Number.isInteger(number))
    .reduce((total, number) => (total + number)) / numbers.length;
		return avrg;
}
console.log(getAverage(6, 2, 55 , 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

const getMedian = (...numbers) => {
    const arr = numbers
    .filter(number => Number.isInteger(number))
    .sort((a,b)=>a -b);
    const halfOfArray= arr.length/2;
    if(arr.length % 2){
        return arr[Math.floor(halfOfArray)];
    } else {
        return  (arr[halfOfArray] + arr[halfOfArray - 1]) / 2;
    }
}
console.log(getMedian(1, 2, 3, 4, 5));

const filterEvenNumbers = (...numbers) => {
    return numbers.filter(number => number % 2);
}
console.log(filterEvenNumbers(1, 2, 3, 4, 5, 6));

const countPositiveNumbers = (...numbers) => {
    return  numbers.filter(number => number > 0).length;
}
console.log(countPositiveNumbers(1, -2, 3, -4, -5, 6));

const getDividedByFive = (...numbers) => {
     return  numbers.filter(number => number % 5===0);
}
console.log(getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));