const htmlMainBody = document.querySelector('.main-body-js');
let display = `<input class="display js-display" placeholder="this is the display" type="text">`;
let result = "";

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
            console.log(val1);
        })
        
    })
}

const getSymbols = () => {
    getValue();
    htmlSymbols.forEach((item) => {
        item.addEventListener("click", () => {
            if (symbol === ""){
                symbol = item.innerHTML;
                htmlDisplay.value = val1 + symbol;
                val3 = val1;
                getValue2();
            }
            else{
                symbol = item.innerHTML;
                getResult();
                htmlDisplay.value = result + symbol;
                val3 = result;
                getValue2();
            }

        })
    })
}

const getValue2 = () => {
    val2 = "";
    htmlNumButtons.forEach((item) => {
        item.addEventListener("click", () => {
            val2 += item.innerHTML;
            htmlDisplay.value = val3 + symbol + val2;
            console.log(val2);
        })
        
    })
}

const getResult = () => {
    switch (symbol){
        case "+":
            result = Number(val3) + Number(val2);
            break;
        case "-":
            result = Number(val3) - Number(val2);
            break;
        case "*":
            result = Number(val3) * Number(val2);
            break;
        case "/":
            result = Number(val3) / Number(val2);
            break;
    }
    htmlDisplay.value = result;
    console.log(result);
}

let val1 = "";
let val2 = "";
let val3 = "";
let symbol = "";

getSymbols();
htmlEqualButton.addEventListener("click", () => {
    getResult();
})




