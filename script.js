
const balanceEl = document.querySelector('.balance');
const descriptionInput = document.getElementById('description');
const amountInput = document.getElementById('amount');
const addBtn = document.querySelector('.add-btn');
const transactionsContainer = document.getElementById('transactions');


let balance = 2;


function updateBalance() {
    balanceEl.textContent = `Balance: ${balance} KZT`;
}

function createTransactionElement(description, amount) {
    const transaction = document.createElement('div');
    transaction.className = 'transaction';

    const transactionText = document.createElement('span');
    transactionText.textContent = `${description}: ${amount} KZT`;

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'X';
    
 
    deleteBtn.addEventListener('click', () => {
        transaction.remove();
        balance -= amount;
        updateBalance();
    });

    transaction.appendChild(transactionText);
    transaction.appendChild(deleteBtn);

    return transaction;
}


function addTransaction() {
    const description = descriptionInput.value.trim();
    const amount = parseFloat(amountInput.value);

    
    if (description === '' || isNaN(amount)) {
        alert('Please enter valid description and amount!');
        return;
    }

   
    balance += amount;
    updateBalance();

 
    const transaction = createTransactionElement(description, amount);
    transactionsContainer.prepend(transaction);

  
    descriptionInput.value = '';
    amountInput.value = '';
}


addBtn.addEventListener('click', addTransaction);


amountInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTransaction();
    }
});
