import $ from 'jquery';
import axios from'axios';

export const roomDetails = (roomID) => {
    const fragment = $(document.createDocumentFragment());
    const section = $(`
    <section>
        <h2>Szczegóły:</h2>
        <p class="room-name"></p>
        <p class="room-desc"></p>
        <p>Loading...</p>
    </section>
    `);

    axios
        .get(`http://localhost:3000/rooms/${roomID}`)
        .then(response => response.data)
        .then(room => {
            const {name, description} = room;
            section.find('.room-name').text(name);
            section.find('.room-desc').text(description);
        });

    fragment.append(section);
    return fragment;
}
