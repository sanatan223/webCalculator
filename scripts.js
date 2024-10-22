const htmlMainBody = document.querySelector('.main-body-js');

let display = `<input class="display js-display" placeholder="this is the display" type="text">`;

let buttons;
const renderbuttons = () => {
    buttons=`
    <div class="buttonspart">
    <button class="buttons js-num-buttons">1</button>
    <button class="buttons js-num-buttons">2</button>
    <button class="buttons js-num-buttons">3</button>
    <button class="buttons js-symbol-buttons">+</button>
    <button class="buttons js-num-buttons">4</button>
    <button class="buttons js-num-buttons">5</button>
    <button class="buttons js-num-buttons">6</button>
    <button class="buttons js-symbol-buttons">-</button>
    <button class="buttons js-num-buttons">7</button>
    <button class="buttons js-num-buttons">8</button>
    <button class="buttons js-num-buttons">9</button>
    <button class="buttons js-symbol-buttons">*</button>
    <button class="buttons js-equal-button">=</button>
    <button class="buttons js-num-buttons">0</button>
    <button class="buttons js-num-buttons">00</button>
    <button class="buttons js-symbol-buttons">/</button>
    </div>`
}
renderbuttons();
htmlMainBody.innerHTML = display + buttons ;

const htmlNumButtons = document.querySelectorAll(".js-num-buttons");
const htmlSymbols = document.querySelectorAll(".js-symbol-buttons");
const htmlDisplay = document.querySelector(".js-display");
const htmlEqualButton = document.querySelector(".js-equal-button");

const getValue = () => {
    htmlNumButtons.forEach((item) => {
        item.addEventListener("click", () => {
            val1 += item.innerHTML;
            htmlDisplay.value = val1;
        })
        
    })
}

const getSymbols = () => {
    htmlSymbols.forEach((item) => {
        item.addEventListener("click", () => {
            symbol = item.innerHTML;
            htmlDisplay.value = val1 + symbol;
            getValue2();
            val3 = val1;
    
    
        })
    })
}

const getValue2 = () => {
    htmlNumButtons.forEach((item) => {
        item.addEventListener("click", () => {
            val2 += item.innerHTML;
            htmlDisplay.value = val3 + symbol + val2;
        })
        
    })
}

const sum = () => {
    return Number(val3) + Number(val2);
}

const sub = () => {
    return Number(val3) - Number(val2);
}

const mult = () => {
    return Number(val3) * Number(val2);
}

const div = () => {
    return Number(val3) / Number(val2);
}

let val1 = "";
let val2 = "";
let val3 = "";
let symbol = "";
let result = "";

getValue();
getSymbols();

htmlEqualButton.addEventListener("click", () => {
    switch (symbol){
        case "+":
            result = sum();
            break;
        case "-":
            result = sub();
            break;
        case "*":
            result = mult();
            break;
        case "/":
            result = div();
            break;
    }

    htmlDisplay.value = result;

    
})


