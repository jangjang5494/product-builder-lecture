const generateBtn = document.getElementById('generate-btn');
const numberDivs = document.querySelectorAll('.number');

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