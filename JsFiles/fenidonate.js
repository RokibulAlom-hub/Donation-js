
document.getElementById('feni-btn').addEventListener('click',function(){
    const feniinputvalue =getValueById('feni-input');
    // get the value of innertext
    const fenidontionValue = getinnertextById('feni-balance');

    // get the currentvalues
    const currentbalance = getinnertextById('currentbalance');

    //validation 
    if(validateInput(feniinputvalue, currentbalance)){
        return (alert('failed to donate'))
    } 
    

    // now sum up and integer with currentbalnce
    const newdonationbalance = feniinputvalue + fenidontionValue;
    
    const newcurrentbalance = currentbalance - feniinputvalue;

    // now have to update the balances
    const currentbalanceupdate = updateTextById('currentbalance',newcurrentbalance);
    // update the feni donation balances
    const newfenibalance = updateTextById('feni-balance',newdonationbalance)
    //create notification for history section through reusable funtion
   const newhistory = createNotificationhsitory(feniinputvalue,'Flood Relief in Feni,Bangladesh');

    const historystorage = document.getElementById('history-section');
    historystorage.insertBefore(newhistory,historystorage.firstChild)
    

}
)