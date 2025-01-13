document.getElementById('btn-cash-out').addEventListener('click',function(event){
    event.preventDefault();

    const cashOut = getInputFieldValueById('input-cash-out');
    const pinNumber = getInputFieldValueById('input-cash-out-pin');
    // console.log('Inside the event handler',cashOut,pinNumber);
    if(isNaN(cashOut)){
        alert('Failed to cash Out');
        return;
    }
    if(pinNumber === 1234){
        const balance = getTextFieldValueById('account-balance');
        if(cashOut > balance){
            alert('You do not have enough money to cash out');
            return;
        }
        // console.log('Get The Balance',balance);
        const newBalance = balance - cashOut;
        document.getElementById('account-balance').innerText = newBalance;

        const div = document.createElement('div');
        div.classList.add('bg-yellow-300');
        div.innerHTML=`
        <h4 class="text-2xl font-bold">Cash out</h4>
        <p> ${cashOut} Withdraw. New Balance ${newBalance}</p>
        `
        document.getElementById('transaction-container').appendChild(div);
    }
    else{
        console.log('No money For you')
    }
})