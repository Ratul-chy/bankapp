console.log("machine.js loaded");

function getValue(id) {
    const element = document.getElementById(id);
    const value = element.value;
    console.log( id,value);
    return value;
}

function getBalance() {
    const currencyBalance = document.getElementById('balance');
    const balance = currencyBalance.innerText;
    console.log('balance:', balance);
    return balance;
}

function setbalance(value) {
    document.getElementById('balance').innerText = value;
}