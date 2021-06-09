const keys = document.querySelectorAll(".key")
const currentNumberElement = document.getElementsByClassName("current-number")[0];
const previousNumberElement = document.getElementsByClassName("previous-number")[0]


let operator = "";
let currentNum = null;
let previousNum = null;

function displayNumber(e) {
    if (e.target.classList.contains("number") && currentNumberElement.innerText == "") {
        currentNumberElement.innerText = e.target.innerText;
        currentNum = +currentNumberElement.innerText
    }
    else if (e.target.classList.contains("number") && currentNumberElement.innerText != "") {
        currentNumberElement.innerText += e.target.innerText;
        currentNum = +currentNumberElement.innerText;
    }
}

function getOperator(e) {
    if (e.target.classList.contains("operator")) {
        if (currentNumberElement.innerText == "") {
            return;
        }
        previousNum = +currentNumberElement.innerText || currentNum;
        currentNumberElement.innerText = ""
        currentNum = null;
        operator = e.target.innerText;
        previousNumberElement.innerText = previousNum + " " + operator;
    }
}

function computation(e) {
    if (e.target.classList.contains("equal")) {

        if (previousNum == null && currentNum == null) {
            return;
        }
        if (currentNum != null && previousNum == null) {
            previousNumberElement.innerText = currentNum + " " + e.target.innerText
        } else {
            previousNumberElement.innerText = previousNum + " " + operator + " " + currentNum + " " + e.target.innerText
        }

        switch (operator) {
            case "+":
                currentNumberElement.innerText = previousNum + currentNum;
                previousNum = previousNum + currentNum;
                break;
            case "-":
                currentNumberElement.innerText = previousNum - currentNum;
                previousNum = previousNum - currentNum;
                break;
            case "*":
                currentNumberElement.innerText = previousNum * currentNum;
                previousNum = previousNum * currentNum;
                break;
            case "/":
                currentNumberElement.innerText = previousNum / currentNum;
                previousNum = previousNum / currentNum;
                break;
        }
    }
}

function clear(e) {
    if (e.target.classList.contains("clear")) {
        previousNum = null;
        currentNum = null;
        previousNumberElement.innerText = "";
        currentNumberElement.innerText = "";
    }
}

keys.forEach(key => { key.addEventListener("click", getOperator) });

keys.forEach(key => { key.addEventListener("click", displayNumber) });

keys.forEach(key => { key.addEventListener("click", computation) });

keys.forEach(key => { key.addEventListener("click", clear) })


/*

(Keep this just in case I need it later)

let currentNum = null;
let previousNum = null;
let op = "";
keys.forEach(key => {
    key.addEventListener("click", function () {
        if (key.classList.contains("number")) {
            currentNumberElement.innerText += key.innerText;
            currentNum = +currentNumberElement.innerText;
        }
        if (key.classList.contains("operator")) {
            if (currentNum == null && currentNumberElement.innerText == "") {
                return;
            }
            currentNumberElement.innerText = "";
            previousNumberElement.innerText = currentNum + " " + key.innerText;
            previousNum = currentNum;
            op = key.innerText;
        }
        if (key.classList.contains("equal")) {
            if (currentNum == null && previousNum == null) {
                return;
            }
            previousNumberElement.innerText += " " + currentNum + " " + key.innerText;
            switch (op) {
                case "+":
                    currentNumberElement.innerText = previousNum + currentNum;
                    break;
                case "-":
                    currentNumberElement.innerText = previousNum - currentNum;
                    break;
                case "*":
                    currentNumberElement.innerText = previousNum * currentNum;
                    break;
                case "/":
                    currentNumberElement.innerText = previousNum / currentNum;
                    break;
            }
        }

        if (key.classList.contains("clear")) {
            currentNumberElement.innerText = "";
            currentNum = null;
            previousNumberElement.innerText = "";
            previousNum = null;
        }
    })
})*/