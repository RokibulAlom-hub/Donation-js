/******here we will work with donation section cards */

document.getElementById('noakhali-btn').addEventListener
('click',function(){
     // get ids for value
     const noakhalivalue = parseFloat(document.getElementById('noakhali-input').value);
     const currentbalance = parseFloat(document.getElementById('currentbalance').innerText);
     const noakhaliblnce = parseFloat(document.getElementById('noakhali-blnce').innerText);
     
     // now minus input money with currentbalnce
     const newbalnce = currentbalance - noakhalivalue;
     // add the donation money in card balance
     const currentNoakhliBlnce = noakhaliblnce + noakhalivalue;
     // set the curretnew balace
     document.getElementById('currentbalance').innerText= newbalnce;
     // set current noakhali balnce
     document.getElementById('noakhali-blnce').innerText= currentNoakhliBlnce;

     // now we had to add notification on history section

     const historyNotification = document.createElement('div');
     historyNotification.className = "bg-white p-5 rounded w-full shadow-md border";
     historyNotification.innerHTML=`
                    <p class ="text-xl font-bold"> $${noakhalivalue} Taka is Donated for famine-2024 at noakhali, Bangladesh </p>
                    <p class ="text-sm"> Date:${new Date().toLocaleDateString()} GMT +0600 (Bangladesh Standard Time) </p>
                    `;
     const historystorage = document.getElementById('history-section') ;
     historystorage.insertBefore(historyNotification,historystorage.firstChild);
     

})

const feni = parseFloat(document.getElementById('feni-input').value);
const aid = parseFloat(document.getElementById('aid-input').value);