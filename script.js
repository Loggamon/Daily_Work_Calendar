//Variables will be sorted by segment later...
var today = moment();
var hourTracker = everyHour


function calendarDate() {
    setInterval(function() {
        $('#currentDay').text(today.format("dddd, MMMM Do"));
    }, 1000);
}

function everyHour() {
    setInterval(function() {
        $('#currentHour').text(today.format("H"));
    }, 1000);
}

calendarDate();
hourTracker();

