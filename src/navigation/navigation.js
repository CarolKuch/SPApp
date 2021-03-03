import $ from 'jquery';
import * as views from '../views';

export const navigation = () => {
    const fragment = $(document.createDocumentFragment());
    const nav = $(`
    <nav class="top-nav navbar navbar-expand-md navbar-dark bg-transparent">
        <a class="navbar-brand" href="#">SPA dla nerdów</a> 
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
    <div class="collapse navbar-collapse justify-content-end" id="collapse">
    </nav>`);
    const buttons = Object
                        .keys(views)
                        .map(viewName => {
                            const button = $(`
                                <div class="top-nav-container">
                                    <li class="nav-button">${viewName.toUpperCase()}</li>
                                </div>
                            `);

                            button.on('click', () => {
                                const customEvent = new CustomEvent('navigation', {
                                detail:{
                                    name: viewName  
                                }})
                                document.dispatchEvent(customEvent);                                
                            })
                            return button;
                        });
    nav.find('#collapse').append(buttons);
    fragment.append(nav);
    return fragment;
}