import $ from 'jquery';
import {calendar} from '../calendar/calendar';
import {daysCounter} from '../calendar/daysCounter';
import { cookies } from '../cookies/cookies';

export let basketCounterGetter = (length = 0) => {
    let basketCounterParagraph = $(document).find('.basketCounter')[0];
    $(basketCounterParagraph).text(length);
    if(length === 0){
        $(document).find('.basket-empty').removeClass('d-none');
        $(document).find('.purchase-button').attr('disabled', true);
    }else{
        $(document).find('.basket-empty').addClass('d-none');
        $(document).find('.purchase-button').removeAttr('disabled');
    }
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
            <div class="basket-price">${price} zł</div>
            <div>
                <input class="basket-quantity" type="number" value="1">
                <button class="btn btn-danger" type="button">Usuń</button>
            </div>
        `;

        basketRow.innerHTML = basketRowContent;
        let basketContainer = $(document).find('.basket-container')[0];
        basketContainer.insertBefore(basketRow, basketTotal);
        if(e.target.className==="basket-button room-basket-button"){
            $(basketContainer).find('.basket-date').last().append(calendar);
        }
        basketBehavior();
        basketCounterGetter(basketRows.length-1);
        cookies(title, image, price);
    }

    let addToBasketClicked = (e) => {
        let button = e.target;
        let addedItem = button.parentElement.parentElement;
        let title = $(addedItem).find('.item-name')[0].innerText;
        let price = parseFloat($(addedItem).find('.price-of-item')[0].innerText.slice(6, 11)).toFixed(2);
        let image = $(addedItem).find('.item-img')[0].src;
        addItemToBasket(title, image, price);
        $(document).find('.backdrop').on('click', () => {
            $(document).find('.basket-container').toggleClass('d-none');
            $(document).find('.backdrop').toggleClass('d-none');
        });
    }

    addToBasketClicked(e);
}

export let basketBehavior = () => {

    $(document).find('.backdrop').on('click', () => {
        $(document).find('.basket-container').toggleClass('d-none');
        $(document).find('.backdrop').toggleClass('d-none');
    });
    
    $(document).find('.backdrop .basket-container').on('click', (e) => {
        e.stopPropagation();
    });
    
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
            let daysCount = 1;
            if($(basketRow).find('.basket-date')[0].firstChild){
                let startDay = $(basketRow).find('.datepicker')[0].value;
                let endDay = $(basketRow).find('.datepicker')[1].value;
                daysCount = daysCounter(startDay, endDay);
            }
            total += quantity * price * daysCount;
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