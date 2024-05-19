let inpEl = document.querySelectorAll('.count-input');
let h1El = document.querySelectorAll('.count-num');
let errEl = document.querySelectorAll('.error-msg');


function addNum() {
    let formVal = inpEl[0].value;
    displayMsg(formVal, "+");
}

function minusNum() {
    let formVal = inpEl[0].value;
    displayMsg(formVal, "-");
}


function displayMsg(formVal, ope) {
    if (isNaN(formVal)) {
        errEl[0].innerHTML = "You must enter a number.";
    }
    else if (ope === "-") {
        h1El[0].innerHTML = Number(h1El[0].innerHTML) - Number(formVal);
        removeErr();
    }
    else if (ope === "+") {
        h1El[0].innerHTML = Number(h1El[0].innerHTML) + Number(formVal);
        removeErr();
    }
}

function clearFields() {
    inpEl[0].value = "";
    h1El[0].innerHTML = "0";
    errEl[0].innerHTML = "";
}

function removeErr() {
    errEl[0].innerHTML = "";
}