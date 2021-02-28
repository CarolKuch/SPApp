import $ from 'jquery';
import * as views from '../views';

export const createMain = () => {
    const main = $(`
        <main>
        </main>
    `);

    console.log(views);
    console.log(views.home);
    console.log(views.rooms);
    document.addEventListener('navigation', event=>{
        const viewName = event.detail.name;

        const viewFn = views[viewName];

        main.empty().append(viewFn());
    });
    return main;
}