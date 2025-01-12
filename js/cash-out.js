document.getElementById('btn-cash-out').addEventListener('click',function(event){
    event.preventDefault();

    const cashOut = getInputFieldValueById('input-cash-out');
    const pinNumber = getInputFieldValueById('input-cash-out-pin');
    // console.log('Inside the event handler',cashOut,pinNumber);
    if(pinNumber === 1234){
        const balance = getTextFieldValueById('account-balance');
        // console.log('Get The Balance',balance);
        const newBalance = balance - cashOut;
        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        console.log('No money For you')
    }
})