const getMaxDigit = (number) => {
    const arr = number.toString().split(``);
        return Math.max(...arr);
}

const getPow = (n,pow) => {
    let result = 1;
    if(pow===0){
        return result = 1;
    } 
    else  if (pow > 0){
        for(let i = 1; i <= pow ; i++){
            result *= n;
        } 
    }
    else if (pow < 0){
        tempResult = 1;
        for(let i = -1; i >= pow ; i--){
            tempResult *= n;
            tempResult2 = 1/tempResult;
            result = tempResult2.toFixed(4); 
        }          
    }

    return result;
}

const correctName = (string) => string[0].toUpperCase() + string.slice(1).toLowerCase();

const getMoney = (money) => {
    return  money - (money * (19.5 / 100));
}

const getRandom = (min,max) => {
    return Math.round(min + Math.random() * (max - min));
}

const repitsOfLetter = (letter, word) => {
    let result = 0;
    for(let i = 0; i < word.length; i++) {
        if (word[i].toLowerCase() === letter.toLowerCase()){
          result +=1;
        }
      }
    return result;
    }


document.writeln(
    `
    Функція№1: Максимальне число з 25498 - ${getMaxDigit(25498)}</br>
    Функція№2: Корінь з 3^3 - ${getPow(3,-3)}</br>
    Функція№3: Виправлення імені з АНДРІЙ - ${correctName('АНДРІЙ')}</br>
    Функція№4: Зарплата з 14000 і податком у 19.5% - ${getMoney(14000)}</br>
    Функція№5: Рандомне число з 2 по 10 - ${getRandom(2,10)}</br>
    Функція№6: Повторів букви А в слові Астрахань - ${repitsOfLetter('а','Астрахань')}</br>
    `
);
