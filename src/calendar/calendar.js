import $ from 'jquery';
import {daysCounter} from './daysCounter';
import {basketBehavior} from '../cart/cartBehavior';

export let calendar = () => {
    let startDate = new Date().toISOString().slice(0, 10);

    let addOneDay = (day) => {
        return day.slice(0,8) + (parseInt(day.slice(8,10), 10) + 1);
    }

    let endDate = addOneDay(startDate);
    let maxDate = (parseInt(startDate.slice(0, 4), 10) + 1) + startDate.slice(4,10);

    let fragment = $(`
        <div class="datepickers-container">
        </div>
    `);

    let datepickerFrom = $(`
        <p "date-description">Początek pobytu:</p> 
        <input 
            class = "datepicker datepicker-from" 
            type = "date" 
            min = "${startDate}"
            max = "${maxDate}" 
            value = "${startDate}"
            onkeydown="return false"
        />
    `);

    let datepickerTo = $(`
        <p class = "date-description">Koniec pobytu:</p>
        <input 
            class = "datepicker datepicker-to" 
            type = "date" 
            min = "${endDate}"
            max = "${maxDate}" 
            value = "${endDate}"   
            onkeydown="return false"
        />`
    );

    datepickerFrom.on('change paste keyup', (e) => {
        startDate = e.target.value;
        let nextDay = addOneDay(startDate);
        $('.datepicker-to').val(nextDay);
        $('.datepicker-to').attr("min", nextDay);
        basketBehavior();
    });

    datepickerTo.on('change paste keyup', (e) => {
        endDate = e.target.value;
        basketBehavior();
    });

    fragment.empty().append(datepickerFrom);    
    fragment.append(datepickerTo);  


    return fragment;
}