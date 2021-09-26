let radioPrice = 15.678;
let waterPricee = 123.965;
let fuelPrice = 90.2345;
let maxPrice = Math.max(radioPrice, waterPricee, fuelPrice);
let minPrice = Math.min(radioPrice, waterPricee, fuelPrice);
let sumPrice = radioPrice + waterPricee + fuelPrice;
let radioRounded = Math.floor(radioPrice);
let waterRounded = Math.floor(waterPricee);
let fuelRounded = Math.floor(fuelPrice);
let sumOfRounding = radioRounded + waterRounded + fuelRounded;
let roundedToHundreds = Math.round(sumPrice / 100) * 100;
let checkIfEven = (Math.floor(sumPrice) % 2 === 0);
let money = 500;
let sumOfTheRest = money - sumPrice;
let avrgPrice = (radioPrice + waterPricee + fuelPrice) / 3;
let roundingEverage = Math.round(avrgPrice * 100) / 100;
let discount = Math.floor(Math.random() * 101);
let discountSum = (sumPrice * (1 - discount/100)).toFixed(2);
let profit = ((sumPrice / 2) - ((discount / 100) * sumPrice)).toFixed(2);
console.log(`Maximun price: ${maxPrice}
Minimun price: ${minPrice}
Total amount: ${sumPrice}
Sum of Rounded prices: ${sumOfRounding}
Rounded to hundreds: ${roundedToHundreds}
Total amount of prices is even: ${checkIfEven}
Rest: ${sumOfTheRest}
Everage: ${roundingEverage}
Discount: ${discount}
Total amount with discount: ${discountSum}
Profit: ${profit}`);