async function getRandomChinese(length) {
    let str = '';
    let i = 0;
    while (i < length) {
        await new Promise((resolve,reject) => {
            str += String.fromCharCode(Date.now().toString().slice(-5));
            i++;
            setTimeout(() =>{
                resolve(str);
            }, 50 * i);
        })
    }
    console.log(str);
}
getRandomChinese(4)