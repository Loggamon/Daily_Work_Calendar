//Variables will be sorted by segment later...
var today = moment();
var hourTracker = everyHour;
var currentHour = $("#currentHour")
var hour = findHour();

var saveBtn = $(".saveBtn");
var timeBlock = $(".time-block");


//--------------------------------------------------------------------------------------
function calendarDate() {
    setInterval(function() {
        $('#currentDay').text(today.format("dddd, MMMM Do"));
    }, 1000);
}

//This is to test if I can keep track of what hour it is (in 24-hour time)
//function everyHour() {
//    setInterval(function() {
//        $('#currentHour').text(today.format("H"));
//    }, 1000);
//}

function everyHour() {
    setInterval(function() {
        currentHour.text(findHour());    
    }, 1000);
}

function findHour() {
    var parsed = parseInt(today.format("H"));
    console.log(parsed);
    return parsed;
}

calendarDate(); //This keeps track of the calendar date
hourTracker(); //this keeps track of my current hour, every second

//console.log(everyHour())
console.log(findHour())
//---------------------------------------------------------------------------------------------------
function setColor() {
    var scheduHour = timeBlock.data("hour");
    var parsed = parseInt(scheduHour); 
    
    console.log(parsed);
    console.log(today.format("H"));
    if (parsed > today.format("H")) {
        timeBlock.attr('class', "future");
    } else if (parsed === today.format("H")) {
        timeBlock.attr('class', "present");
    } else {
        timeBlock.attr('class', "past");
    }
}

setColor();
//---------------------------------------------------------------------------------------------------

function saveValue(event) {
    var scheduHour = event.target.id;
    scheduInput = timeBlock.val();

    console.log(scheduInput);
    localStorage.setItem(scheduHour, JSON.stringify(scheduInput));
    
}
saveBtn.on("click", saveValue);


