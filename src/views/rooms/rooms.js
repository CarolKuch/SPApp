import $ from 'jquery';
import axios from 'axios';
import {changeCarouselLinks} from '../../common/changeCarouselLinks';

export const rooms = () => {
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
                <article class="fragment-article">
                        <p>Ilość łóżek: ${room.beds}</p>
                        <p>Liczba gości: ${room.guests}</p>
                        <p>Cena pokoju: ${room.price.toFixed(2)} zł</p>
                </article>
            `);

            const roomHeaderImg = $(`
                <div class="room-header-img">
                    <h4>${room.name}</h4>
                    <img src = ${room.img}/>
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

            article.prepend(roomHeaderImg);

            return article;

            }
            ))
        .then(articles => {
            roomsList.empty().append(articles);
        });    

    return fragment;
};