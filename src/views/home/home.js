import $ from 'jquery';
import axios from 'axios';
import {changeCarouselLinks} from '../../common/changeCarouselLinks';

export const home = () => {
    changeCarouselLinks([
        'https://cdn.pixabay.com/photo/2016/02/19/10/51/stairs-1209439_1280.jpg',
        'https://images.unsplash.com/photo-1573088422077-b6ed78408ff4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=918&q=80',
        'https://cdn.pixabay.com/photo/2017/02/27/15/12/rice-2103481_1280.jpg'
    ]);
    $('.main-header').show();
    const fragment = $(document.createDocumentFragment());
    const h2 = $('<h2 class="text-center">Home</h2>');
    const p = $(`
    <section class="text-center">
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