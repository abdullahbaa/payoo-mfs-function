document.getElementById('btn-add-money').addEventListener('click',function(event){
    event.preventDefault();

    console.log('add money button clicked');

    // getInputFIeldById();

    // const addMoney = document.getElementById();
    // console.log('add money value',addMoney);

    // const addMoney =document.getElementById('input-add-money').value;
    // const addMoneyNumber =parseFloat(addMoney);

    const addMoney =document.getElementById('input-add-money');

    const pinNumber =document.getElementById('input-pin-number');
    console.log('add money with parameter',addMoney,pinNumber);



});