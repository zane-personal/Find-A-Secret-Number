let secretNum = generateSecretNumber();

// DOM Elements
const tn = document.getElementById('tn'); // Assuming 'tn' is your submit button ID
const numInput = document.getElementById('numInput');
const resetBtn = document.getElementById('resetBtn'); // Add a reset button to your HTML

// 1. Generate a random secret number (e.g., between 1 and 100)
function generateSecretNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

// 2. Submit Button Click Handler
tn.addEventListener('click', function() {
    const rawInput = numInput.value.trim();

    if (rawInput === '') {
        actionpanel('Please enter a number first.');
        return;
    }

    const userGuess = Number(rawInput);

    if (isNaN(userGuess)) {
        actionpanel('Please enter a valid number.');
        return;
    }

    if (userGuess < secretNum) {
        actionpanel('Too low! Try again.');
    } else if (userGuess > secretNum) {
        actionpanel('Too high! Try again.');
    } else {
        actionpanel('Congratulations! You guessed the secret number!');
        
        // Disable both input and submit button on win
        tn.disabled = true;
        numInput.disabled = true;
        
        // Show the reset button if it was hidden
        if (resetBtn) resetBtn.style.display = 'inline-block';
    }
});

// 3. Reset Game Function
function resetGame() {
    // Generate a new number
    secretNum = generateSecretNumber();

    // Clear and re-enable inputs
    numInput.value = '';
    numInput.disabled = false;
    tn.disabled = false;

    // Optional: focus back on the input field
    numInput.focus();

    actionpanel('Game reset! Guess the new number.');
}

// Attach event listener to reset button
if (resetBtn) {
    resetBtn.addEventListener('click', resetGame);
}

// Modal functions
function actionpanel(message) {
    const modal = document.getElementById('customModal');
    document.getElementById('modalMessage').innerText = message;
    modal.classList.add('active');
}

function closeModal() {
    const modal = document.getElementById('customModal');
    modal.classList.remove('active');
}
