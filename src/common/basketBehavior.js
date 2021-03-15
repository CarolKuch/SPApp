import $ from 'jquery';
let counter = 0;

export let basketCounter = (info) => {
    if (info != "nav") {counter++;
    };
    return counter;
};