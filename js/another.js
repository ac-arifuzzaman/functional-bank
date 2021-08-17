function getInputValue(inputId) {
    const inputAmount = document.getElementById(inputId);
    const inputAmountText = inputAmount.value;
    const amountValue = parseFloat(inputAmountText);
    // clear input 
    inputAmount.value = '';
    return amountValue;

}


document.getElementById('deposit-button').addEventListener('click', function () {
    /* const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText); */
    const depositAmount = getInputValue('deposit-input');

    // get current deposit 
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(depositTotalText)

    depositTotal.innerText = previousDepositTotal + depositAmount;

    // update balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = previousBalanceTotal + depositAmount


});

// handle widthdraw button 
document.getElementById('withdraw-button').addEventListener('click', function () {
    /*  const widthdrawInput = document.getElementById('withdraw-input');
     const widthdrawAmountText = widthdrawInput.value;
     const perviousWidthdrawTotal = parseFloat(widthdrawAmountText); */
    const perviousWidthdrawTotal = getInputValue('withdraw-input');

    // const widthdrawAmountText = getInputValue('withdraw-input');
    const widthdrawTotal = document.getElementById('withdraw-total');
    const widthdrawTotalText = widthdrawTotal.innerText;
    const currentWidthdrawTotal = parseFloat(widthdrawTotalText);
    widthdrawTotal.innerText = currentWidthdrawTotal + perviousWidthdrawTotal

    /* // clear input 
    widthdrawInput.value = ''; */

    // update balance after widthdraw 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal - perviousWidthdrawTotal

})