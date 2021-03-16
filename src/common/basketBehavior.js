import $ from 'jquery';
let counter = 0;

export let basketCounter = (info) => {
    if (info != "nav") {
        counter++;
    };
    return counter;
}

export let basketBehavior = () => {

    var removeBasketItemButtons = $(document).find('.btn-danger');
    for(let i = 0; i < removeBasketItemButtons.length; i++){
        let button = removeBasketItemButtons[i];
        $(button).on('click', (e) => {
            let buttonClicked = e.target;
            buttonClicked.parentElement.parentElement.remove();
            updateBasketTotal();
        })
    }

    let updateBasketTotal = () => {
        let basketRows = $(document).find('.basket-row');
        let total = 0;
        for(let i = 1; i < basketRows.length-1; i++){
            let basketRow = basketRows[i];
            let priceContainer = $(basketRow).find('.basket-price')[0];
            let quantityContainer = $(basketRow).find('.basket-quantity')[0];
            let price = priceContainer.innerText.replace('zł', '');
            let quantity = quantityContainer.value;
            total =+ quantity * price;
        }
        $(basketRows).find('.basket-total-price').prepend(total);
    }
}