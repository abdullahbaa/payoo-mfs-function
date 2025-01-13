document.getElementById('btn-add-money').addEventListener('click',function(event){
    event.preventDefault();

    const addMoney =getInputFieldValueById('input-add-money');
    const pinNumber =getInputFieldValueById('input-pin-number');
    if(isNaN(addMoney)){
        alert('Failed to add Money');
        return;
    }
    // console.log('add money inside addMoney2.js',addMoney,pinNumber);

    // Wrong way to varify.Don not try it at your serious website
    if(pinNumber === 1234){
       const balance = getTextFieldValueById('account-balance');
       const newBalance = balance + addMoney;
    //    console.log(addMoney,balance);
        document.getElementById('account-balance').innerText = newBalance;
        
        // Add to transaction history
        const p = document.createElement('p');
        p.innerText = `Added: ${addMoney}Tk. New Balance: ${newBalance}`;
        console.log(p);

        // Should be a common functionn
        document.getElementById('transaction-container').appendChild(p);

    }
    else{
        alert('Failed to add money');
    }

});