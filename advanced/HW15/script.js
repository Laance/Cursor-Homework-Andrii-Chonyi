const newIdentificator = document.getElementById('identificator');
const btnNext = document.getElementById('btn-next');
const input = document.getElementById('font-size');

newIdentificator.innerHTML = 0;

function* createIdGenerator() {
    let i = 1;
    while (true) {
        yield newIdentificator.innerHTML = i++;
    }
}

const idGenerator = createIdGenerator();

btnNext.onclick = function () { idGenerator.next() };


const textPlaceHolder = (val) => {
    input.innerHTML = `${val}`;
    input.style.fontSize = `${val}px`;
}

function* newFontGenerator(size) {
    while (true) {
        let fontSize = yield size;
        
        if(fontSize === 'up') {
            size += 2;
        }

        if(fontSize === 'down' && size >= 2) {
            size -= 2;
        }
    }
}

const fontGenerator = newFontGenerator(14);
textPlaceHolder(fontGenerator.next("up").value);


document.addEventListener('click', (event) => {
    if (event.target.id === "btn-down") {
        textPlaceHolder(fontGenerator.next("down").value);
    }
    if (event.target.id === "btn-up") {
        textPlaceHolder(fontGenerator.next("up").value);
    }
})