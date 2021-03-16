import $ from 'jquery';
let counter = 0;

export let basketCounter = (info) => {
    if (info != "nav") {counter++;
    };
    var removeCartItemButtons = document.getElementsByClassName('btn-danger');
    for(let i = 0; i <removeCartItemButtons.length; i++){
        let button = removeCartItemButtons[i];
        $(button).on('click', (e) => {
            let buttonClicked = e.target;
            buttonClicked.parentElement.parentElement.remove();
        })
    }
    return counter;
};