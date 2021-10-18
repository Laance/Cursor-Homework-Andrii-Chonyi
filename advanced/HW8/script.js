const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

const getMyTaxes = function (salary) {
    return (this.tax * salary);
}
console.log( getMyTaxes.call(litva, 1550));

const getMiddleTaxes = function (){
    return (this.tax * this.middleSalary);
}
console.log(getMiddleTaxes.call(latvia));

const getTotalTaxes = function (){
    return (this.tax * this.middleSalary * this.vacancies)
}
console.log(getTotalTaxes.call(ukraine));

const getMySalary = function() {
    const minS = 1500;
    const maxS = 2000;
    const result = {};
    result.salary = Math.round(minS + Math.random() * (maxS - minS));
    result.taxes = result.salary * this.tax;
    result.profit = result.salary - this.tax * result.salary;
    return result;
}
setInterval(() => console.log(getMySalary.call(litva)), 10000);