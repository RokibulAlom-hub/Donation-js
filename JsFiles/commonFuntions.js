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

// funtion for create new notificaton

function createNotificationhsitory(amount,fileLocation){
    const historyNotification = document.createElement('div');
     historyNotification.className = "bg-white mb-4 p-5 rounded w-full shadow-md border";
     historyNotification.innerHTML=`
                    <p class ="text-xl font-bold"> $${amount} Taka is Donated for ${fileLocation} </p>
                    <p class ="text-sm"> Date:${new Date().toLocaleDateString()} Time: ${new Date().toLocaleTimeString()}GMT +0600 (Bangladesh Standard Time) </p>
                    `;
      return historyNotification;              
}

