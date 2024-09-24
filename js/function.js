function donnateGetTextValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;

}
function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}


function showSectionById(id){
    // default hidden all section
    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('transaction-section').classList.add('hidden');
    // get the expected section by calling function parameter
    document.getElementById(id).classList.remove('hidden')
}
// console.log('hello world from function js');