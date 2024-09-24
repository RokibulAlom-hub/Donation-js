/******************here we will work with donation and history buttons */
document.getElementById('history-btn').addEventListener
('click',function(){
    // remove and add sections
    document.getElementById('donation-section').classList.add('hidden')
    document.getElementById('history-section').classList.remove('hidden')
    
   
})
document.getElementById('donation-btn').addEventListener
('click',function(){
    document.getElementById('donation-section').classList.remove('hidden')
    document.getElementById('history-section').classList.add('hidden')
})
