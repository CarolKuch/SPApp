import $ from 'jquery';
import 'jquery-ui';

export let calendar = () => {
    let frag = (`
        <p>Wybierz datę początku pobytu:</p> <input class="datepicker datepicker-from" type="text" />
        <p>Wybierz datę końca pobytu: </p> <input class="datepicker datepicker-to" type="text" />
    `);


    return frag;
}