let currentBalance = document.getElementById('balance');
// Common
function getInput(inputID) {
    let inputField = document.getElementById(inputID).value;
    const inputAmount = Number(inputField);
    document.getElementById(inputID).value = '';
    return inputAmount;
};
// Get Total Deposit and Withdraw
function getTotal(totalID, amount) {
    let totalField = document.getElementById(totalID);
    totalField.innerText = Number(totalField.innerText) + amount;
};

// Update Balance
function updateBalance(inputAmount, isAdd) {
    if (isAdd === true) {
        currentBalance.innerText = Number(currentBalance.innerText) + inputAmount;
    } else {
        latestBalance = Number(currentBalance.innerText) - inputAmount;
        return latestBalance;
    }
};

// Handle Deposit
document.getElementById('deposit-button').addEventListener('click', function () {
    let depositAmount = getInput('deposit-input');
    // Error Handle
    if (isNaN(depositAmount) || depositAmount < 0) {
        alert('Please enter a valid number');
        return;
    }
    getTotal('deposit', depositAmount);
    updateBalance(depositAmount, true);
});

// Handle Withdraw
document.getElementById('withdraw-button').addEventListener('click', function () {
    let withdrawAmount = getInput('withdraw-input')
    // Error Handle
    if (isNaN(withdrawAmount) || withdrawAmount < 0) {
        alert('Please enter a valid number');
        return;
    }
    const updatedBalance = updateBalance(withdrawAmount, false);
    if (updatedBalance < 0) {
        alert("!!!You don't have enough money. Please try to input lower amount");
        return;
    }
    currentBalance.innerText = updatedBalance;
    getTotal('withdraw', withdrawAmount);
});