import $ from 'jquery';
import 'jquery-ui';



export let calendar = () => {
    let fragment = (`
    Pole: <input id="datepicker" type="text" />
    `);
    return fragment;
}