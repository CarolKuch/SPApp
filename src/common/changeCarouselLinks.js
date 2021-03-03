
import $ from 'jquery';
export let changeCarouselLinks = (props) => {
    
    let headerImgSrces = props;
    for(let i= 0; i < 3; i++) {
        $($('.d-block')[i]).attr('src', headerImgSrces[i]);
    };

}