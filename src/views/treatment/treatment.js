import $ from 'jquery';
import axios from 'axios';
import {changeCarouselLinks} from '../../common/changeCarouselLinks';
import basketIcon from '../../img/basket.svg';
import {basketCounter, addToBasket} from '../../cart/cartBehavior';

export const treatments = () => {
    $('#header-carousel').show(); 
    $('.top-nav').addClass(['bg-transparent']);
    changeCarouselLinks([
        'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        'https://images.unsplash.com/photo-1591343395082-e120087004b4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1051&q=80',
        'https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80'
    ])
    const fragment = $(document.createDocumentFragment());
    const h2 = $('<h2 class="text-center">Zabiegi</h2>');
    const treatmentsList = $('<section class="text-center">Loading...</section>');
    fragment.append(h2);
    fragment.append(treatmentsList)
    axios
        .get('http://localhost:3000/treatments')
        .then(response=>response.data)
        .then(treatments=>
            treatments.map(treatment => {
                const article = $(`
                <article class="fragment-article text-center fragment-article d-flex">
                    <div class="article-container">
                        <p>Obszar: ${treatment.area}</p>
                        <p>Czas trwania: ${treatment.time}</p>
                        <div class="price-of-item">Cena: ${treatment.price.toFixed(2)} zł</div>
                    </div>
                </article>
            `); 

            const basketButton = $(`
                <button class="basket-button treatment-basket-button">Dodaj do koszyka
                    <img src=${basketIcon} alt="koszyk" class="basket"/>
                </button>
            `);

            const treatmentHeaderImg = $(`
                <div class="room-header-img">
                    <h4 class = "item-name">${treatment.name}</h4>
                    <img class = "item-img" src = ${treatment.img}/>
                </div>
            `);
            
            basketButton.on('click', (e) => {
                addToBasket(e);
              });

            treatmentHeaderImg.on('click', () => {
                const customEvent = new CustomEvent('navigation', {
                    detail: {
                        name: 'treatment-details',
                        treatmentID: treatment.id
                    }
                });
                document.dispatchEvent(customEvent);
            });

            article.prepend(treatmentHeaderImg);
            article.find('.article-container').append(basketButton);

            return article;

            }
            ))
        .then(articles => {
            treatmentsList.empty().append(articles);
        });    

    return fragment;
};