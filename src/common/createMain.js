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
                window.location.pathname = viewName;
                const viewFn = views[viewName];
                main.empty().append(viewFn());
        }

    });
    const mySimpleRouter = () => {
        let userPath = window.location.pathname;
        console.log(userPath);
        if(userPath=='/rooms'){
            main.empty().append(views['rooms']);
        }
        if(userPath=='/treatments'){
            main.empty().append(views['treatments']);
        }
        if(userPath=='/login'){
            main.empty().append(views['login']);
        }
        if(userPath=='/registration'){
            main.empty().append(views['registration']);
        }
    }
    
    window.addEventListener('popstate', mySimpleRouter());

    return main;
}