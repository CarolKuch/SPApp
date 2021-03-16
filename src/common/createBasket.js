import $ from 'jquery';
import {calendar} from './calendar';

export const createBasket = () => {
    const basket = $(
        `<section class="basket-container">
            <h2>Twój koszyk</h2>
            <div class="basket-row">
                <h5 class = "basket-product-header row-item">Produkt/usługa</h5>
                <h5 class = "basket-date-header row-item">Termin</h5>
                <h5 class = "basket-price-header row-item">Cena</h5>
                <h5 class = "basket-quantity-header row-item">Ilość</h5>
            </div>
            <div class="basket-row">
                <div class="basket-product">Pokój jednoosobowy
                    <img src="https://images.unsplash.com/photo-1543674214-9a5c967100dc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80" alt="Zdjęcie pokoju">
                </div>
                <div class="basket-date"></div>
                <div class="basket-price">33.99 zł</div>
                <div>
                    <input class="basket-quantity" type="number" value="2">
                    <button class="btn btn-danger" type="button">Usuń</button>
                </div>
            </div>
            <div class="basket-row">
                <div class="basket-product">Pokój jednoosobowy
                    <img src="https://images.unsplash.com/photo-1543674214-9a5c967100dc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80" alt="Zdjęcie pokoju">
                </div>
                <div class="basket-date"></div>
                <div class="basket-price">33.99 zł</div>
                <div>
                    <input class="basket-quantity" type="number" value="2">
                    <button class="btn btn-danger" type="button">Usuń</button>
                </div>
            </div>
            <div class="basket-total basket-row">
                <strong class="basket-total-title">Łączna kwota zamówienia: </strong>
                <span class="basket-total-price"> zł</span>
            </div>
            <button class="purchase-button" type="button">ZAMÓW</button>
        </section>
    `);
    basket.find('.basket-date').append(calendar);
    return basket;
}