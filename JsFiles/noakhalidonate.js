// here we will work with all the cards element with function
document.getElementById('noakhali-btn').
addEventListener('click',function(){
     // collect value
     const noakhaliInputValue =getValueById('noakhali-input');
     // collect htmldata
     const noakhaliCurrentBalance = getinnertextById('noakhali-balance');
     // collect newbalance
     const currentbalance = getinnertextById('currentbalance');
     // validation part
     if(validateInput(noakhaliInputValue,currentbalance)){
          return alert ('something is missing')
     }
     // sum and integar
     const newnokhalicurrentbalance = noakhaliCurrentBalance + noakhaliInputValue;
     const newcurrentbalance = currentbalance - noakhaliInputValue;

     // now update the values
     const updatenokhalibalance = updateTextById('noakhali-balance',newnokhalicurrentbalance);
     const updatecurrentbalance = updateTextById('currentbalance',newcurrentbalance);

     // createnotification
    const historycreation = createNotificationhsitory(noakhaliInputValue,' famine-2024 at Noakhali, Bangladesh');

    const historystorage = document.getElementById('history-section');

     // now append notification
     historystorage.insertBefore(historycreation,historystorage.firstChild)

     // open modal function
    showModal()
})
