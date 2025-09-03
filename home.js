

document.getElementById('admoney-btn').addEventListener('click', function(e){
    e.preventDefault();
    const bank = document.getElementById('bank').value;
    const account = document.getElementById('bank-number').value;
    const addAmount = parseInt(document.getElementById('add-amount').value);
    const pinNumber = document.getElementById('pin-number').value;

    

    const oldFund = parseInt(document.getElementById('old-amount').innerText);
    console.log(bank,account,addAmount,pinNumber,oldFund);

    const newAmount = oldFund + addAmount;
    document.getElementById('old-amount').innerText = newAmount;


})