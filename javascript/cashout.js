document.getElementById('cashout-btn').addEventListener ('click', function() {
    //1. get mobile number input
     const cashoutNumberinput = document.getElementById('cashout-number');
        const cashoutNumber = cashoutNumberinput.value;
        console.log(cashoutNumber);
        if (cashoutNumber.length !== 11 ) {
            alert("Invalid mobile number");
            return;
        }
    //2. get amount input
        const cashoutAmountinput = document.getElementById('cashout-amount');
        const cashoutAmount = cashoutAmountinput.value;
        console.log(cashoutAmount);
    //3. get currency balance
        const currencyBalance = document.getElementById('balance');
        const balance = currencyBalance.innerText;
        console.log(balance);
    //4. check if balance is sufficient for cashout
        const newbalance = Number(balance) - Number(cashoutAmount);
        

        if (newbalance < 0) {
            alert('Insufficient balance for cashout');
            return;
        } 
        
        const cashoutpininput = document.getElementById('cashout-pin');
        const cashoutPin = cashoutpininput.value;
        if (cashoutPin === '1234') {
            alert('Cashout successful');
            console.log('newbalance:', newbalance);
            currencyBalance.innerText = newbalance;
    } else {
        alert('Incorrect pin, cashout failed');
    }
  
})