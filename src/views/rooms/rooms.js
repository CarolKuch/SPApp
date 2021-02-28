import $ from 'jquery';
import axios from 'axios';

export const rooms = () => {
    const fragment = $(document.createDocumentFragment());
    const h2 = $('<h2>Rooms</h2>');
    const roomsList = $('<section>Loading...</section>')
    fragment.append(h2)
    fragment.append(roomsList)
    axios
        .get('http://localhost:3000/rooms')
        .then(response=>response.data)
        .then(rooms=>
            rooms.map(room => {
                const article = $(`
                <article style="background-color: #fbbc04">
                    <p>Ilość łóżek: ${room.beds}</p>
                    <p>Liczba gości: ${room.guests}</p>
                    <p>Cena pokoju: ${room.price.toFixed(2)} zł</p>
                </article>
            `);

            const h4 = $(`<h4>${room.name}</h4>`);
            h4.on('click', () => {
                const customEvent = new CustomEvent('navigation', {
                    detail: {
                        name: 'room-details',
                        roomID: room.id
                    }
                });
                document.dispatchEvent(customEvent);
            });

            article.prepend(h4);

            return article;

            }
            ))
        .then(articles => {
            roomsList.empty().append(articles);
        });    

    return fragment;
};