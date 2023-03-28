
const inputVal = document.getElementById("number");
const numSplits = document.getElementById("split");

const btn = document.getElementById("splitButton")
const resultCont = document.getElementById("result")

console.log(inputVal)
console.log(numSplits)


const randomColor = () => {
    // let maxVal = 0xFFFFFF; 
    // let randomNumber = Math.random() * maxVal; 

    // randomNumber = Math.floor(randomNumber);
    // randomNumber = randomNumber.toString(16);
    
    // let randColor = randomNumber.padStart(6, 0);   
    // return `#${randColor.toUpperCase()}`
    const letters = "0123456789ABCDEF";
    let hex = "#";
    for (let i = 0; i < 6; i++) {
        hex += letters[Math.floor(Math.random() * 15)
        ];
    }
    return hex;
}




const split = () => {
    const input = inputVal.value;
    const num = numSplits.value;
    let curr = input;

    for (let i = 0; i < num; i++) {
        
        const div = document.createElement("div")
        div.classList.add("split")
        div.style.backgroundColor = randomColor();

        const len = Math.ceil(curr / (num - i));
        div.style.flex = len;
        div.innerHTML = len;
        resultCont.appendChild(div);
        curr = curr - len;
    }
    inputVal.value = "";
    numSplits.value = "";



}


btn.addEventListener("click" , split)
