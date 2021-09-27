const radioPrice = 15.678;
const waterPrice = 123.965;
const fuelPrice = 90.2345;
const money = 500;

const maxPrice = Math.max(radioPrice, waterPrice, fuelPrice);
const minPrice = Math.min(radioPrice, waterPrice, fuelPrice);
const sumPrice = radioPrice + waterPrice + fuelPrice;

const radioRounded = Math.floor(radioPrice);
const waterRounded = Math.floor(waterPrice);
const fuelRounded = Math.floor(fuelPrice);
const sumOfRounding = radioRounded + waterRounded + fuelRounded;
const roundedToHundreds = Math.round(sumPrice / 100) * 100;

const checkIfEven = sumOfRounding% 2 == 0;
const sumRest = money - sumPrice;
const avrgPrice = sumOfRounding / 3;
const roundingEverage = Math.round(avrgPrice * 100) / 100;

const discount = Math.floor(Math.random() * 101);
const discountSum = (sumPrice * (1 - discount/100)).toFixed(2);
const profit = ((sumPrice / 2) - ((discount / 100) * sumPrice)).toFixed(2);
console.log(`Max price: ${maxPrice}

Min price: ${minPrice}

Total price: ${sumPrice}

Sum of Rounded prices: ${sumOfRounding}

Rounded to hundreds: ${roundedToHundreds}

Total amount of prices is even: ${checkIfEven}

Rest: ${sumRest}

Everage: ${roundingEverage}

Discount: ${discount}

Total amount with discount: ${discountSum}

Profit: ${profit}`);