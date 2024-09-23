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
    // till now current available balance
    availableBalance = accountBalance - inputDonateFeni;
    document.getElementById('acount-balance').innerText = availableBalance;
})

// donate for quota protest
document.getElementById('btn-donate-now-quota-protest').addEventListener('click',function(event){
    event.preventDefault();
    const inputDonateQoutaProtest = getInputFieldValueById('input-donate-amount-quota-protest');
    if (isNaN(inputDonateQoutaProtest)){
        alert('failed to donate money for qouta protest');
        return;
    }
    // get id using function
    const accountBalance = donnateGetTextValueById('acount-balance');
    const donateQuotaProtest = donnateGetTextValueById('fund-quota-protest');
    // quota protest total fund
    const donateProtestBalance = donateQuotaProtest + inputDonateQoutaProtest;
    document.getElementById('fund-quota-protest').innerText = donateProtestBalance;
    // till now current available balance
    availableBalance = accountBalance - inputDonateQoutaProtest;
    document.getElementById('acount-balance').innerText = availableBalance;
})