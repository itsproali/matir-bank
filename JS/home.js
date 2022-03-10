let currentBalance = document.getElementById('balance');
// Get Input Field Values
function getInput(inputID) {
    let inputField = document.getElementById(inputID).value;
    if (inputField === '') {
        alert('Please Enter a valid Number');
        return;
    } else {
        const inputAmount = Number(inputField);
        document.getElementById(inputID).value = '';
        return inputAmount;
    }
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
        const latestBalance = Number(currentBalance.innerText) - inputAmount;
        return latestBalance;
    }
};

// Handle Deposit
document.getElementById('deposit-button').addEventListener('click', function () {
    let depositAmount = getInput('deposit-input');
    // Error Handle
    if (depositAmount === undefined) {
        return;
    } else if (isNaN(depositAmount) || depositAmount < 0) {
        alert('Please enter a valid number');
        return;
    }
    getTotal('deposit', depositAmount);
    updateBalance(depositAmount, true);
    addToStorage('Deposit', 'deposit');
    addBalanceToStorage();
});

// Handle Withdraw
document.getElementById('withdraw-button').addEventListener('click', function () {
    let withdrawAmount = getInput('withdraw-input')
    // Error Handle
    if (withdrawAmount === undefined) {
        return;
    } else if (isNaN(withdrawAmount) || withdrawAmount < 0) {
        alert('Please enter a valid number');
        return;
    }
    const updatedBalance = updateBalance(withdrawAmount, false);
    if (updatedBalance < 0) {
        alert("!!! You don't have enough money to withdraw !!!");
        return;
    }
    currentBalance.innerText = updatedBalance;
    getTotal('withdraw', withdrawAmount);
    addToStorage('Withdraw', 'withdraw');
    addBalanceToStorage();
});

// Add Deposit or Withdraw total to Local Storage
const addToStorage = (name, id) => {
    const displayedMoney = document.getElementById(id).innerText;
    localStorage.setItem(name, displayedMoney);
}
// Add Current Balance to Local Storage
const addBalanceToStorage = () => {
    localStorage.setItem('Balance', currentBalance.innerText);
}
// Display Stored Deposit/withdraw total to the ui
const displayStoredValue = (name, id) => {
    const storedMoney = document.getElementById(id);
    const getMoney = localStorage.getItem(name);
    storedMoney.innerText = getMoney;
}
// Display Stored Balance to ui
const displayStoredBalance = () => {
    const storedBalance = localStorage.getItem('Balance');
    currentBalance.innerText = storedBalance;
}

// Display Previous Stored Data
displayStoredValue('Deposit', 'deposit');
displayStoredValue('Withdraw', 'withdraw');

if (localStorage.getItem('Balance')) {
    displayStoredBalance();
} else {
    console.log('Hello World!!');
}