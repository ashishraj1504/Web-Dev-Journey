const para = document.querySelector('p')
const chara = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
const text = para.innerHTML
let iteration = 0
para.addEventListener('mouseenter',() => {
    
    setInterval(() => {
        const str = text.split("").map((ele,idx) => {
            if(idx < iteration){
                return ele
            }
        return chara.split("")[Math.floor(Math.random()*52)]
        }).join("")
        para.innerHTML = str;
        iteration += 0.30
    }, 30);
})