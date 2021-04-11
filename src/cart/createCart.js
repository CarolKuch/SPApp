import $ from 'jquery';
import {calendar} from '../calendar/calendar';

export const createBasket = () => {
    const basket = $(
        `
        <div class="backdrop d-none">
            <section class="basket-container d-none">
                <h2>Twój koszyk</h2>
                <div class="basket-row">
                    <h5 class = "basket-product-header row-item">Produkt/usługa</h5>
                    <h5 class = "basket-date-header row-item">Termin</h5>
                    <h5 class = "basket-price-header row-item">Cena za dzień</h5>
                    <h5 class = "basket-quantity-header row-item">Ilość</h5>
                </div>
                <div class="basket-empty"><strong>Aktualnie Twój koszyk jest pusty. </strong></div>
                <div class="basket-total basket-row">
                    <strong class="basket-total-title">Łączna kwota zamówienia: </strong>
                    <span class="basket-total-price"> zł</span>
                </div>
                <button class="purchase-button" type="button">ZAMÓW</button>
            </section>
        </div>
    `);
    return basket;
}