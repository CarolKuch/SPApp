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
            rooms.map(room => $(`
                    <article style="background-color: #fbbc04">
                        <h4>${room.name}</h4>
                        <p>Ilość łóżek: ${room.beds}</p>
                        <p>Liczba gości: ${room.guests}</p>
                        <p>Cena pokoju: ${room.price.toFixed(2)} zł</p>
                    </article>
                `)
            ))
        .then(articles => {
            console.log(articles);
            roomsList.empty().append(articles);
        });    

    return fragment;
};