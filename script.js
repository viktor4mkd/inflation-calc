function inflationCalculator() {

    let inflationRate = document.querySelector('#inflationRate');
    let money = document.querySelector('#money');

    inflationRate = parseFloat(inflationRate.value);
    money = parseFloat(money.value);

    let years = document.querySelector('#years').value
    years = parseFloat(years);

    let worth = money + (money * (inflationRate / 100));

    for (let i = 1; i < years; i++) {

        worth += worth * (inflationRate / 100);

    }

    let newElement = document.createElement('div');
    newElement.className = 'new-value';
    newElement.innerText = `Today's ${money}euros are worth same like  ${worth.toFixed(0)}euros in ${years} years.`;
    document.querySelector('.container').appendChild(newElement);

}


