/********************here we have to work with common funtionalities */

// funtion of collecting input value
// to ge values
function getValueById(id) {
    const inputvalue = parseFloat(document.getElementById(id).value);
    return inputvalue;
}
// to get innertext of html
function getinnertextById(id) {
    const textvalue = parseFloat(document.getElementById(id).innerText);
    return textvalue;
}
// funtion for update the innertext by id
function updateTextById(id, value) {
    document.getElementById(id).innerText = value
}


// validation check funtion

function validateInput(value, maxValue) {
    return (isNaN(value) || value === "" || value > maxValue);
}

