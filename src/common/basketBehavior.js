import $ from 'jquery';
import {calendar} from '../common/calendar';

export let basketCounterGetter = (length = 0) => {
    let basketCounterParagraph = $(document).find('.basketCounter')[0];
    $(basketCounterParagraph).text(length);
}

export let addToBasket = (e) => {
    let basketRows = $(document).find('.basket-row');

    let addItemToBasket = (title, image, price) => {
        let basketRow = document.createElement('div');
        $(basketRow).attr('class', 'basket-row');
        let basketTotal = $(document).find('.basket-total')[0];
        let basketItem = $(document).find('.basket-container')[0];
        let basketItemNames = $(basketItem).find('.item-name');
        for(let i = 0; i < basketItemNames.length; i++){
            if(basketItemNames[i].innerText == title){
                alert("Masz to już w koszyku, Kapturku");
                return undefined;
            }
        }
        let basketRowContent = `
            <div class = "basket-product">
                <span class = "item-name">${title}</span>
                <img src="${image}" alt="Zdjęcie pokoju">
            </div>
            <div class="basket-date"></div>
            <div class="basket-price">${price}</div>
            <div>
                <input class="basket-quantity" type="number" value="1">
                <button class="btn btn-danger" type="button">Usuń</button>
            </div>
        `;
        basketRow.innerHTML = basketRowContent;
        let basketContainer = $(document).find('.basket-container')[0];
        basketContainer.insertBefore(basketRow, basketTotal);
        $(basketContainer).find('.basket-date').last().append(calendar);
        basketBehavior();
        basketCounterGetter(basketRows.length-1);
    }

    let addToBasketClicked = (e) => {
        let button = e.target;
        let addedItem = button.parentElement.parentElement;
        let title = $(addedItem).find('.item-name')[0].innerText;
        let price = parseFloat($(addedItem).find('.price-of-item')[0].innerText.slice(6, 11)).toFixed(2);
        let image = $(addedItem).find('.item-img')[0].src;
        addItemToBasket(title, image, price);
    }

    addToBasketClicked(e);
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
        basketCounterGetter(basketRows.length-2);
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