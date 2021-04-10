export let daysCounter = (d1, d2) =>
{
  let startDay = d1.split('-');
  let endDay = d2.split('-');

  startDay  = new Date(startDay[0], startDay[1], startDay[2]);
  endDay  = new Date(endDay[0], endDay[1], endDay[2]);

  let startDayMiniseconds = parseInt(startDay.getTime() / 1000);
  let endDayMiniseconds = parseInt(endDay.getTime() / 1000);

  var difference = endDayMiniseconds - startDayMiniseconds;

  var differenceInHours = difference / 60 / 60;

  var differenceInDays = differenceInHours  / 24;

  return differenceInDays;
}

