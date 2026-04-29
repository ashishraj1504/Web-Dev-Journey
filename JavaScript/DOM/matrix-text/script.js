const para = document.querySelector('p')
const chara = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
const text = para.innerHTML
para.addEventListener('mouseenter',() => {
    
    setInterval(() => {
        const str = text.split('').map((ele,idx) => {
        return chara.split('')[Math.floor(Math.random()*53)]
        }).join("")
        para.innerHTML = str;
    }, 50);
})