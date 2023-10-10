const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function () {
    const login = document.getElementById("login");
    login.style.display = "none";
    const BankDetails = document.getElementById("BankDetails");
    BankDetails.style.display = "block";
})
const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener("click", function () {
    const DepositAmount = document.getElementById("DepositAmount").value;
    const depositNumber = parseFloat(DepositAmount);


    const CurrentDeposit = document.getElementById("CurrentDeposit").innerText;
    const CurrentDepositNumber = parseFloat(CurrentDeposit);
    const totalDeposit = depositNumber + CurrentDepositNumber;
    document.getElementById("CurrentDeposit").innerText = totalDeposit;
    document.getElementById("DepositAmount").value = "";


    const CurrentBalance = document.getElementById("CurrentBalance").innerText;
    const CurrentBalanceNumber = parseFloat(CurrentBalance);
    const totalBalance = depositNumber + CurrentBalanceNumber;
    document.getElementById("CurrentBalance").innerText = totalBalance;
    document.getElementById("DepositAmount").value = "";
})