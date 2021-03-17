import $ from 'jquery';
let counter = 0;

export let basketCounter = (info) => {
    if (info != "nav") counter++;
    return counter;
}

export let basketBehavior = () => {
    let removeBasketItemButtons = $(document).find('.btn-danger');
    let quantityInputs = $(document).find('.basket-quantity');
    
    let updateBasketTotal = () => {
        let basketRows = $(document).find('.basket-row');
        let total = 0;
        for(let i = 1; i < basketRows.length-1; i++){
            let basketRow = basketRows[i];
            let priceContainer = $(basketRow).find('.basket-price')[0];
            let quantityContainer = $(basketRow).find('.basket-quantity')[0];
            let price = priceContainer.innerText.replace('zł', '');
            let quantity = quantityContainer.value;
            total += quantity * price;
        }
        total = Math.round(total*100)/100;
        $(basketRows).find('.basket-total-price').empty().append(total+" zł");
    }

    updateBasketTotal();

    let removeBasketItem = (e) => {
        let buttonClicked = e.target;
        buttonClicked.parentElement.parentElement.remove();
        updateBasketTotal();
    }

    let quantityChanged = (e) => {
        let input = e.target;
        if( isNaN(input.value) || input.value <= 0 ) input.value = 1;
        updateBasketTotal();
    }

    for(let i = 0; i < quantityInputs.length; i++){
        let input = quantityInputs[i];
        $(input).on('change', quantityChanged);
    }

    for(let i = 0; i < removeBasketItemButtons.length; i++){
        let button = removeBasketItemButtons[i];
        $(button).on('click', removeBasketItem);
    }
}