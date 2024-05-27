document.addEventListener('DOMContentLoaded', function() {
    const generateBtn = document.getElementById('generateBtn');
    const numberInput = document.getElementById('numberInput');
    const resultContainer = document.getElementById('result');

    generateBtn.addEventListener('click', function() {
        const userInput = numberInput.value;
        const number = parseInt(userInput);

        if (isNaN(number) || number <= 0) {
            alert('Please enter a valid positive number.');
            numberInput.value = '';
            resultContainer.textContent = '';
            return;
        }

        const fibonacciSeries = generateFibonacci(number);
        resultContainer.textContent = fibonacciSeries.join(', ');
    });

    function generateFibonacci(n) {
        if (n === 1) return [0];
        if (n === 2) return [0, 1];

        const series = [0, 1];
        for (let i = 2; i < n; i++) {
            series.push(series[i - 1] + series[i - 2]);
        }
        return series;
    }
});

