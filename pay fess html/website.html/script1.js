const currencies = {
    "USD": "$", "EUR": "€", "INR": "₹", "GBP": "£", "JPY": "¥",
    "AUD": "A$", "CAD": "C$", "CHF": "Fr.", "CNY": "¥", "MXN": "$",
    "BRL": "R$", "RUB": "₽", "ZAR": "R", "SAR": "ر.س", "TRY": "₺",
    "NOK": "kr", "SEK": "kr", "DKK": "kr", "PLN": "zł", "SGD": "$",
    "HKD": "$", "Naira": "₦", "PHP": "₱", "MYR": "RM", "THB": "฿"
};

const currencySearchInput = document.getElementById("currency-search");
const currencyList = document.getElementById("currency-list");


function populateCurrencyList(filteredCurrencies) {
    currencyList.innerHTML = "";
    filteredCurrencies.forEach(currency => {
        const li = document.createElement("li");
        li.textContent = `${currency} - ${currencies[currency]}`;
        li.addEventListener("click", () => {
            currencySearchInput.value = currency; 
            currencyList.style.display = "none"; 
        });
        currencyList.appendChild(li);
    });
    currencyList.style.display = filteredCurrencies.length > 0 ? "block" : "none"; // Show list if there are results
}

currencySearchInput.addEventListener("input", function() {
    const searchQuery = currencySearchInput.value.toUpperCase();
    const filteredCurrencies = Object.keys(currencies).filter(currency => currency.toUpperCase().includes(searchQuery));
    populateCurrencyList(filteredCurrencies);
});

document.getElementById("payment-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const studentName = document.getElementById("student-name").value;
    const studentId = document.getElementById("student-id").value;
    const amount = document.getElementById("amount").value;
    const paymentMethod = document.getElementById("payment-method").value;
    const currencyCode = currencySearchInput.value;
    const currencySymbol = currencies[currencyCode];

    document.getElementById("receipt-name").textContent = studentName;
    document.getElementById("receipt-id").textContent = studentId;
    document.getElementById("receipt-amount").textContent = `${currencySymbol}${amount}`;
    document.getElementById("receipt-currency").textContent = currencyCode;
    document.getElementById("receipt-method").textContent = paymentMethod;
    document.getElementById("receipt-date").textContent = new Date().toLocaleDateString();

    document.getElementById("receipt").classList.remove("hidden");
});