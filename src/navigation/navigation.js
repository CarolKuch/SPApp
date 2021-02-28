import $ from 'jquery';
import * as views from '../views';

export const navigation = () => {
    const fragment = $(document.createDocumentFragment());
    const nav = $(`<nav class="top-nav"></nav> `);
    const buttons = Object
                        .keys(views)
                        .map(viewName => {
                            const button = $(`<button type="button">${viewName.toUpperCase()}</button>`);

                            button.on('click', () => {
                                const customEvent = new CustomEvent('navigation', {
                                detail:{
                                    name: viewName  
                                }})
                                document.dispatchEvent(customEvent);                                
                            })
                            return button;
                        });
    nav.append(buttons);
    fragment.append(nav);
    return fragment;
}