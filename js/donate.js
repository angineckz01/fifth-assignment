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
    // condition for donate
    if (inputDonateNoakhali > accountBalance || inputDonateNoakhali===''){
        alert('You have insufficient money to donate for noakhali');
        return;
    }
    const donateNoakhali = donnateGetTextValueById('donate-noakhali');
    // noakhali total fund = current fund + amount to be donated
    const donateNoakhaliBalance =donateNoakhali + inputDonateNoakhali;
    document.getElementById('donate-noakhali').innerText = donateNoakhaliBalance;
    // available balance = deducted donated amount from accountBalance
    const availableBalance = accountBalance - inputDonateNoakhali;
    document.getElementById('acount-balance').innerText = availableBalance;

    // add to transaction history
    // donation amount and current ammount
    const donateNoakhaliTitle = document.getElementById('donate-noakhali-title').innerText;
    const p = document.createElement('p');
    p.classList.add('bg-gray-300');
    p.classList.add('text-black');
    p.classList.add('text-xl');
    p.classList.add('text-center');
    p.innerText = `Donated : ${inputDonateNoakhali} Tk ${donateNoakhaliTitle}. Available balance : ${availableBalance}`;
    console.log(p);
    document.getElementById('transaction-container').appendChild(p);
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
    // condition for donate
    if (inputDonateFeni > accountBalance || inputDonateFeni===''){
        alert('You have insufficient money to donate for feni');
        return;
    }
    const donateFeni = donnateGetTextValueById('donate-feni');
    // feni total fund = current + donated
    const donateFeniBalance = donateFeni + inputDonateFeni;
    document.getElementById('donate-feni').innerText = donateFeniBalance;
    // till now current available balance
    const availableBalance = accountBalance - inputDonateFeni;
    document.getElementById('acount-balance').innerText = availableBalance;

    // add to transaction history
    // donation amount and current ammount
    const donateFeniTitle = document.getElementById('donate-feni-title').innerText;
    const p = document.createElement('p');
    p.classList.add('bg-gray-200');
    p.classList.add('text-black');
    p.classList.add('text-xl');
    p.classList.add('text-center');
    p.innerText = `Donated : ${inputDonateFeni} Tk ${donateFeniTitle}. Available balance : ${availableBalance}`;
    console.log(p);
    document.getElementById('transaction-container').appendChild(p);

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
    // condition for donate
    if (inputDonateQoutaProtest > accountBalance || inputDonateQoutaProtest===''){
        alert('You have insufficient money to donate for qouta protest');
        return;
    }
    const donateQuotaProtest = donnateGetTextValueById('fund-quota-protest');
    // quota protest total fund
    const donateProtestBalance = donateQuotaProtest + inputDonateQoutaProtest;
    document.getElementById('fund-quota-protest').innerText = donateProtestBalance;
    // till now current available balance
    const availableBalance = accountBalance - inputDonateQoutaProtest;
    document.getElementById('acount-balance').innerText = availableBalance;

    // add to transaction history
    // donation amount and current ammount
    const donateProtestTitle = document.getElementById('donate-protest-title').innerText;
    const p = document.createElement('p');
    p.classList.add('bg-red-100');
    p.classList.add('text-black');
    p.classList.add('text-xl');
    p.classList.add('text-center');
    p.innerText = `Donated : ${inputDonateQoutaProtest} Tk ${donateProtestTitle}. Available balance : ${availableBalance}`;
    console.log(p);
    document.getElementById('transaction-container').appendChild(p);
})



// show section when clicked
document.getElementById('show-donation-section').addEventListener('click',function(){
    showSectionById('donation-section');
});
document.getElementById('show-transaction-history').addEventListener('click',function(){
    showSectionById('transaction-section');
});