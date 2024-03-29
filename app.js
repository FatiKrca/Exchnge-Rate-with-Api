//element seçme

const amountElement =document.getElementById("amount");
const firstSelect = document.getElementById("firstCurrency");
const secondSelect = document.getElementById("secondCurrency");

const currency = new Currency("USD","TRY");
const ui = new UI(firstSelect,secondSelect)


eventListeners();
function eventListeners(){
    amountElement.addEventListener("input",excangeCurrency);
    firstSelect.onchange= function(){
        currency.changeFirstCurrency(firstSelect.options[firstSelect.selectedIndex].textContent);
        ui.changeFirst();
        excangeCurrency();
    }
    secondSelect.onchange= function(){
        currency.changeSecondCurrency(secondSelect.options[secondSelect.selectedIndex].textContent);
        ui.changeSecond();
        excangeCurrency();

    }
}

function excangeCurrency(){

    currency.changeAmount(amountElement.value);

    currency.exchange()
    .then(result => {
        ui.displayResult(result);
    })
    .catch(err=>console.log(err));
}