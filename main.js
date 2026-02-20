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

// Contact Form Submission
const form = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

async function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    try {
        const response = await fetch(event.target.action, {
            method: form.method,
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        });
        if (response.ok) {
            formStatus.textContent = "Thanks for your submission!";
            formStatus.style.color = "#28a745"; // Green for success
            form.reset();
        } else {
            const responseData = await response.json();
            if (Object.hasOwn(responseData, 'errors')) {
              formStatus.textContent = responseData["errors"].map(error => error["message"]).join(", ");
            } else {
              formStatus.textContent = "Oops! There was a problem submitting your form";
            }
            formStatus.style.color = "#dc3545"; // Red for error
        }
    } catch (error) {
        formStatus.textContent = "Oops! There was a problem submitting your form";
        formStatus.style.color = "#dc3545";
    }
}
form.addEventListener("submit", handleSubmit)


// Check for saved theme preference on load
document.addEventListener('DOMContentLoaded', () => {
    const isDarkMode = localStorage.getItem('isDarkMode') === 'true';
    applyTheme(isDarkMode);
});
