import $ from 'jquery';
import * as views from '../views';
import basketIcon from '../img/basket.svg';
import {basketCounter} from '../common/basketBehavior';

export const navigation = () => {
    let view;
    const fragment = $(document.createDocumentFragment());
    const nav = $(`
    <nav class="top-nav navbar navbar-expand-md navbar-dark bg-transparent">
        <a class="navbar-brand" href="#">SPA dla nerdów</a> 
        <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#collapse" aria-controls="#collapse" aria-expanded="false" aria-label="Toggle navigation">
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
                                view = viewName;
                            })
                            
                            return button;
                        });
    let basketButton = (`
        <div class="top-nav-container">
            <li class="nav-button nav-basket">
                <img src=${basketIcon} alt="koszyk" class="basket"/>
                <p class="basketCounter">${basketCounter("nav")}</p>
            </li>
        </div>
    `);

    nav.on('click', () => {
        $('.top-nav').removeClass(['bg-transparent']);
    })
     
    nav.find('#collapse').append(buttons);
    nav.find('#collapse').append(basketButton);
    setInterval(()=>{ 
        $('.basketCounter').remove();
        nav.find('.nav-basket').append(`<p class= "basketCounter">${basketCounter("nav")}</p>`);
    }, 1000);
  

    window.addEventListener('scroll', ()=>{
        if (window.pageYOffset > 50 || view == "registration" || view == "login"){
            $('.top-nav').removeClass(['bg-transparent']);
        }else{
            $('.top-nav').addClass(['bg-transparent']);
        }
    });
    fragment.append(nav);
    return fragment;
}