document.getElementById('cashout-btn').addEventListener ('click', function() {
    //1. get mobile number input
        const cashoutNumberinput = getValue('cashout-number');
        if (cashoutNumberinput.length !== 11 ) {
            alert("Invalid mobile number");
            return;
        }
    //2. get amount input
        const cashoutAmountinput = getValue('cashout-amount');
        
    //3. get currency balance
        const currencyBalance = document.getElementById('balance');
        const balance = currencyBalance.innerText;
        console.log(balance);
    //4. check if balance is sufficient for cashout
        const newbalance = Number(balance) - Number(cashoutAmountinput);
        

        if (newbalance < 0) {
            alert('Insufficient balance for cashout');
            return;
        } 
        
        const cashoutpininput = getValue('cashout-pin');
        if (cashoutpininput === '1234') {
            alert('Cashout successful');
            console.log('newbalance:', newbalance);
            currencyBalance.innerText = newbalance;
    } else {
        alert('Incorrect pin, cashout failed');
    }
  
})