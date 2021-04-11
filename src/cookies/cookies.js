import $ from 'jquery';

export const cookies = (title, image, price) => {
    document.cookie = "title="+title;
    document.cookie = "image="+image;
    document.cookie = "price="+price;
    console.log(document.cookie);
}