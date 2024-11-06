const lowercase = 'abcdefghijklmnopqrstuvwxyz';
const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';

function generatePassword() {
    const length = 16; // Password length
    let chars = lowercase + uppercase + numbers + symbols;
    let password = '';

    // Ensure at least one character from each type
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    // Fill the rest of the password
    for (let i = password.length; i < length; i++) {
        password += chars[Math.floor(Math.random() * chars.length)];
    }

    // Shuffle the password
    password = password.split('').sort(() => Math.random() - 0.5).join('');
    
    document.getElementById('passwordDisplay').textContent = password;
}

function resetPassword() {
    document.getElementById('passwordDisplay').textContent = 'Your password will appear here';
}

document.getElementById('generateBtn').addEventListener('click', generatePassword);
document.getElementById('resetBtn').addEventListener('click', resetPassword);