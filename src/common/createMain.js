import $, { map } from 'jquery';
import * as views from '../views';
import {roomDetails} from '../views/rooms/roomDetails'

export const createMain = () => {
    const main = $(`
        <main>
        </main>
    `);

    document.addEventListener('navigation', event => {
        const viewName = event.detail.name;

        switch (viewName) {
            case 'room-details':
                main.empty().append(roomDetails(event.detail.roomID));
                break;
            default:
                const viewFn = views[viewName];
                main.empty().append(viewFn());

        }

    });
    return main;
}