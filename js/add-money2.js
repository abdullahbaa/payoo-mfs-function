document.getElementById('btn-add-money').addEventListener('click',function(event){
    event.preventDefault();

    const addMoney =getInputFieldValueById('input-add-money');
    const pinNumber =getInputFieldValueById('input-pin-number');
    // console.log('add money inside addMoney2.js',addMoney,pinNumber);

    // Wrong way to varify.Don not try it at your serious website
    if(pinNumber === 1234){
       const balance = getTextFieldValueById('account-balance');
       const newBalance = balance + addMoney;
    //    console.log(addMoney,balance);
        document.getElementById('account-balance').innerText = newBalance;
        

    }
    else{
        alert('Failed to add money');
    }

});