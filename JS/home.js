 // Common
function getInput(inputID) {
    let inputField = document.getElementById(inputID).value;
    const inputAmount = Number(inputField);
    document.getElementById(inputID).value = '';
    return inputAmount;
};

function getTotal(totalID, amount) {
    let totalField = document.getElementById(totalID);
    totalField.innerText = Number(totalField.innerText) + amount;
};

// Update Balance
function updateBalance(inputAmount, isAdd) {
    let currentBalance = document.getElementById('balance');
    if (isAdd == true) {
        currentBalance.innerText = Number(currentBalance.innerText) + inputAmount;
    }
    else {
        currentBalance.innerText = Number(currentBalance.innerText) - inputAmount;
    }
}
// Handle Deposit
document.getElementById('deposit-button').addEventListener('click', function () {
   
    /*  // Get Deposit Amount
    let depositField = document.getElementById('deposit-input');
    let depositAmount = depositField.value;
    // Clear deposit input field
    depositField.value = ''; */

    /* // Show deposit amount
    const depositTotal = document.getElementById('deposit');
    depositTotal.innerText = Number(depositTotal.innerText) + Number(depositAmount);*/

    /* // Set latest account balance
    let currentBalance = document.getElementById('balance');
    currentBalance.innerText = Number(currentBalance.innerText) + Number(depositAmount); */
    
    let depositAmount = getInput('deposit-input');
    getTotal('deposit', depositAmount);
    updateBalance(depositAmount, true);
    // Error Handle
    // if (currentBalance.innerText == 'NaN' || depositAmount < 0) {
    //     alert('Please enter a valid number');
    //     location.reload();
    // }
});

// Handle Withdraw
document.getElementById('withdraw-button').addEventListener('click', function () {
   
    /* // Get withdraw amount
    let withdrawField = document.getElementById('withdraw-input');
    let withdrawAmount = withdrawField.value;
    // Clear withdraw input field
    withdrawField.value = ''; */

    /* // Show Withdraw amount
    const withdrawTotal = document.getElementById('withdraw');
    withdrawTotal.innerText = Number(withdrawTotal.innerText) + Number(withdrawAmount); */

    /* // Set latest account balance
   let currentBalance = document.getElementById('balance');
   currentBalance.innerText = Number(currentBalance.innerText) - Number(withdrawAmount); */
    
    let withdrawAmount = getInput('withdraw-input')
    getTotal('withdraw', withdrawAmount);
    updateBalance(withdrawAmount, false);
    // Error Handle
    // if (currentBalance.innerText == 'NaN' || withdrawAmount < 0) {
    //     alert('Please enter a valid number');
    //     location.reload();
    // }
    // else if (currentBalance.innerText < 0) {
    //     alert("!!!You don't have enough money. Please try to input lower amount");
    //     location.reload();
    // }
});