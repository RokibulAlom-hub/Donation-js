document.getElementById('aid-btn').
addEventListener('click',function(){
    // get the values
    const aidinputValue = getValueById('aid-input');
    // get the innertext
    const aidCurrentbalance = getinnertextById('aid-balance');
    // get the currentbalance
    const currentbalance = getinnertextById('currentbalance');
    // validation settings
    if(validateInput(aidinputValue,currentbalance)){
        return alert('error in input')
    }
    // sum and integer
    const newaidbalance = aidCurrentbalance +aidinputValue;

    const newcurrentbalance = currentbalance - aidinputValue;
    // update the balances
    const updatecurrentbalance =updateTextById('currentbalance',newcurrentbalance);

    const updateaidbalnce = updateTextById('aid-balance',newaidbalance);

    //create notification
    const historyCreation = createNotificationhsitory(aidinputValue,' Injured in the Quota Movement, Bangladesh')

    const historystorage = document.getElementById('history-section');
    // now append
    historystorage.insertBefore(historyCreation,historystorage.firstChild);
    // open modal function
    showModal()
})