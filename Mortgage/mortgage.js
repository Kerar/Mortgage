const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the loan value: ', (loanValue) => {
    rl.question('Enter the deposit amount: ', (depositAmount) => {
        rl.question('Enter your salary: ', (salary) => {
            const monthlyPayment = calculateMortgage(Number(loanValue), Number(depositAmount), Number(salary));
            console.log(monthlyPayment);
            rl.close();
        });
    });
});

function calculateMortgage(loanValue, depositAmount, salary) {
    const totalAmount = loanValue - depositAmount;
    const maxLoanAmount = salary * 4.5; // Assuming maximum loan amount is 4.5 times the salary

    if (totalAmount > maxLoanAmount) {
        return "Sorry, you are not eligible for the loan.";
    }

    if (totalAmount <= maxLoanAmount) {
        const annualInterestRate = 0.05; // Assuming a fixed annual interest rate of 5%
        const monthlyInterestRate = annualInterestRate / 12;
        const loanTermInMonths = 30 * 12; // Assuming a loan term of 30 years

        // Calculate the monthly payment here
        const monthlyPayment = totalAmount * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, loanTermInMonths)) / (Math.pow(1 + monthlyInterestRate, loanTermInMonths) - 1);

        return "Monthly Payment: £" + monthlyPayment.toFixed(2);
    }
}
//test