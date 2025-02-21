// Get DOM elements
const balanceEl = document.querySelector('.balance');
const descriptionInput = document.getElementById('description');
const amountInput = document.getElementById('amount');
const addBtn = document.querySelector('.add-btn');
const transactionsContainer = document.getElementById('transactions');

// Initialize balance
let balance = 2;

// Update balance display
function updateBalance() {
    balanceEl.textContent = `Balance: ${balance} KZT`;
}

// Create transaction element
function createTransactionElement(description, amount) {
    const transaction = document.createElement('div');
    transaction.className = 'transaction';

    const transactionText = document.createElement('span');
    transactionText.textContent = `${description}: ${amount} KZT`;

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = '🗑️';
    
    // Delete transaction handler
    deleteBtn.addEventListener('click', () => {
        transaction.remove();
        balance -= amount;
        updateBalance();
    });

    transaction.appendChild(transactionText);
    transaction.appendChild(deleteBtn);

    return transaction;
}

// Add transaction
function addTransaction() {
    const description = descriptionInput.value.trim();
    const amount = parseFloat(amountInput.value);

    // Validate inputs
    if (description === '' || isNaN(amount)) {
        alert('Please enter valid description and amount!');
        return;
    }

    // Update balance
    balance += amount;
    updateBalance();

    // Create and add transaction element
    const transaction = createTransactionElement(description, amount);
    transactionsContainer.prepend(transaction);

    // Clear inputs
    descriptionInput.value = '';
    amountInput.value = '';
}

// Event listeners
addBtn.addEventListener('click', addTransaction);

// Handle Enter key press in amount input
amountInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTransaction();
    }
});
