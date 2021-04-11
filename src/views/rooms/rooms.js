import $ from 'jquery';
import axios from 'axios';
import {changeCarouselLinks} from '../../common/changeCarouselLinks';
import basketIcon from '../../img/basket.svg';
import {addToBasket} from '../../cart/cartBehavior';
import { calendar } from '../../calendar/calendar';


export const rooms = () => {
    $('#header-carousel').show(); 
    $('.top-nav').addClass(['bg-transparent']);
    changeCarouselLinks(
    ['https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    'https://images.unsplash.com/photo-1566195992011-5f6b21e539aa?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=967&q=80',
    'https://images.unsplash.com/photo-1581879608672-f4b28f26c348?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1009&q=80'
    ])
    const fragment = $(document.createDocumentFragment());
    const h2 = $('<h2 class="text-center">Pokoje</h2>');
    const roomsList = $('<section class="text-center">Loading...</section>')
    fragment.append(h2)
    fragment.append(roomsList)
    axios
        .get('http://localhost:3000/rooms')
        .then(response=>response.data)
        .then(rooms=>
            rooms.map(room => {
                const article = $(`
                <article class="fragment-article d-flex">
                    <div class="article-container">
                        <p>Ilość łóżek: ${room.beds}</p>
                        <p>Liczba gości: ${room.guests}</p>
                        <p class="price-of-item">Cena: ${room.price.toFixed(2)} zł</p>
                    <div>
                </article>
            `);

            const basketButton = $(`
                <button class="basket-button room-basket-button">Dodaj do koszyka
                    <img src=${basketIcon} alt="koszyk" class="basket"/>
                </button>
            `);

            const roomHeaderImg = $(`
                <div class="room-header-img">
                    <h4 class = "item-name">${room.name}</h4>
                    <img class = "item-img" src = ${room.img}/>
                </div>
            `);

            roomHeaderImg.on('click', () => {
                const customEvent = new CustomEvent('navigation', {
                    detail: {
                        name: 'room-details',
                        roomID: room.id
                    }
                });
                document.dispatchEvent(customEvent);
            });

            basketButton.on('click', (e) => {
               addToBasket(e);
            });
            article.prepend(roomHeaderImg);


            article.find('.article-container').append(calendar);
            article.find('.article-container').append(basketButton);

            return article;
            }
            ))
        .then(articles => {
            roomsList.empty().append(articles);
        }); 
    return fragment;
};