import $ from 'jquery';
import axios from 'axios';

export const home = () => {
    $('.main-header').show();
    const fragment = $(document.createDocumentFragment());
    const h2 = $('<h2>Home</h2>');
    const p = $(`
    <section>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda in delectus 
    cum itaque atque maiores maxime illum vel culpa quasi, 
    quisquam necessitatibus! Provident autem possimus vero placeat 
    inventore aliquid natus.
    </section>
    `)
    fragment.append(h2);
    fragment.append(p);

    
    
    return fragment;
};