import $ from 'jquery';

export let calendar = () => {
    let currentDate = new Date().toISOString().slice(0, 10);

    let addOneDay = (day) => {
        return day.slice(0,8) + (parseInt(day.slice(8,10), 10) + 1);
    }

    let tomorrow = addOneDay(currentDate);
    let maxDate = (parseInt(currentDate.slice(0, 4), 10) + 1) + currentDate.slice(4,10);

    let fragment = $(`
        <div class="datepickers-container">
        </div>
    `);

    let datepickerFrom = $(`
        <p "date-description">Wybierz datę początku pobytu:</p> 
        <input 
            class = "datepicker datepicker-from" 
            type = "date" 
            max = "${maxDate}" 
            value = "${currentDate}"
            min = "${currentDate}"/>
    `);

    let datepickerTo = $(`
        <p class = "date-description">Wybierz datę końca pobytu:</p>
        <input 
            class = "datepicker datepicker-to" 
            type = "date" 
            max = "${maxDate}" 
            value = "${tomorrow}"   
            min = "${tomorrow}"/>`
    );

    datepickerFrom.on('change paste keyup', (e) => {
        let nextDay = addOneDay(e.target.value);
        $('.datepicker-to').val(nextDay);
        $('.datepicker-to').attr("min", nextDay);
    });
   

    fragment.empty().append(datepickerFrom);    
    fragment.append(datepickerTo);  


    return fragment;
}