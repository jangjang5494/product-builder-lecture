const generateBtn = document.getElementById('generate-btn');
const numberDivs = document.querySelectorAll('.number');
const themeSwitch = document.getElementById('checkbox');

const generateNumbers = () => {
    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNumber);
    }
    return Array.from(numbers);
};

generateBtn.addEventListener('click', () => {
    const lottoNumbers = generateNumbers();
    numberDivs.forEach((div, index) => {
        div.textContent = lottoNumbers[index];
    });
});

// Theme switch logic
const applyTheme = (isDarkMode) => {
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        themeSwitch.checked = true;
    } else {
        document.body.classList.remove('dark-mode');
        themeSwitch.checked = false;
    }
};

const toggleTheme = (e) => {
    const isDarkMode = e.target.checked;
    applyTheme(isDarkMode);
    localStorage.setItem('isDarkMode', isDarkMode);
};

themeSwitch.addEventListener('change', toggleTheme);

// Check for saved theme preference on load
document.addEventListener('DOMContentLoaded', () => {
    const isDarkMode = localStorage.getItem('isDarkMode') === 'true';
    applyTheme(isDarkMode);
});
