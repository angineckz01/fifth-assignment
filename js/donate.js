// donate for noakhali
document.getElementById('btn-donate-now-noakhali').addEventListener('click', function(event){
    event.preventDefault();
    const inputDonateNoakhali = getInputFieldValueById('input-donate-amount-noakhali');
    if (isNaN(inputDonateNoakhali)){
        alert('failed to donate money for Noakhali');
        return;
    }
    // get id using function
    const accountBalance = donnateGetTextValueById('acount-balance');
    const donateNoakhali = donnateGetTextValueById('donate-noakhali');
    // noakhali total fund = current fund + amount to be donated
    const donateNoakhaliBalance =donateNoakhali + inputDonateNoakhali;
    document.getElementById('donate-noakhali').innerText = donateNoakhaliBalance;
    // available balance = deducted donated amount from accountBalance
    const availableBalance = accountBalance - inputDonateNoakhali;
    document.getElementById('acount-balance').innerText = availableBalance;
})

// doate for feni
document.getElementById('btn-donate-now-feni').addEventListener('click',function(event){
    event.preventDefault();
    const inputDonateFeni = getInputFieldValueById('input-donate-amount-feni');
    if (isNaN(inputDonateFeni)){
        alert('failed to donate money for Feni');
        return;
    }
    // get id using function
    const accountBalance = donnateGetTextValueById('acount-balance');
    const donateFeni = donnateGetTextValueById('donate-feni');
    // feni total fund = current + donated
    const donateFeniBalance = donateFeni + inputDonateFeni;
    document.getElementById('donate-feni').innerText = donateFeniBalance;
    availableBalance = accountBalance - inputDonateFeni;
    document.getElementById('acount-balance').innerText = availableBalance;
})