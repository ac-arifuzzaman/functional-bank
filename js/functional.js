document.getElementById('deposit-button').addEventListener('click', function () {
    const depositeInput = document.getElementById('deposit-input');
    const depositeAmountText = depositeInput.value;
    const depositeAmount = parseFloat(depositeAmountText)
    // get current deposite 
    const depositeTotal = document.getElementById('deposit-total');
    const depositeTotalText = depositeTotal.innerText;
    const previousDepositTotal = parseFloat(depositeTotal)
    depositeTotal.innerText = previousDepositTotal + depositeAmount;

    // clear input value 
    depositeInput.value = '';

})