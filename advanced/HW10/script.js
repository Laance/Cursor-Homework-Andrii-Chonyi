const container =  document.getElementById('block');

const generateBlocks = () => {
    for (let i = 0; i < 25; i++) {
        const div = document.createElement('div')
        container.append(div)
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        div.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
    }
}

const generateBlocksInterval = () => {
    setInterval(() => {
        container.innerHTML = ''
    generateBlocks()
    }, 1000);
}
generateBlocksInterval();