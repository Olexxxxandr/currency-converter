const fromCurrencyElement = document.getElementById("fromCurrency");
const toCurrencyElement = document.getElementById("toCurrency");
const amountElement = document.getElementById("amount");
const resultElement = document.getElementById("result");
const convertButton = document.getElementById("convert");

const exchangeRates = {
    USD: 1.0,
    EUR: 0.85,
    GBP: 0.73,
    UAH: 37.10
};

convertButton.addEventListener("click", () => {
    const fromCurrency = fromCurrencyElement.value;
    const toCurrency = toCurrencyElement.value;
    const amount = parseFloat(amountElement.value);

    if (isNaN(amount)) {
        alert("Please enter a valid amount.");
        return;
    }

    const exchangeRateFrom = exchangeRates[fromCurrency];
    const exchangeRateTo = exchangeRates[toCurrency];

    if (exchangeRateFrom && exchangeRateTo) {
        const convertedAmount = (amount / exchangeRateFrom) * exchangeRateTo;
        resultElement.textContent = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
    } else {
        resultElement.textContent = "Conversion not available.";
    }
});