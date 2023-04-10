window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  let loanAmount = document.getElementById("loan-amount");
  let loanYears = document.getElementById("loan-years");
  let loanRate = document.getElementById("loan-rate");

  const defaulValues = {amount: 12000, years: 4, rate: 5.5};

  loanAmount = defaulValues.amount;
  loanYears = defaulValues.years;
  loanRate = defaulValues.rate;
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const currentVaules = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentVaules));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const P = values.amount;
  const i = (values.rate / 100) / 12;
  const n = (values.years * 12);

  return((P * i) / (1 - Math.pow((1 + i), -n))).toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyPayment = document.getElementById("monthly-payment");
  monthlyPayment.innerText = "$" + monthly;
}
