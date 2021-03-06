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

console.log(findHour())
//---------------------------------------------------------------------------------------------------

function setColor() {
    
    timeBlock.each(function( index ) {
    
        var scheduHour = $(this).data("hour");
        var parsed = parseInt(scheduHour); 
    
        //console.log(scheduHour);
        //console.log(findHour());
        //console.log(parsed);

        if (parsed > today.format("H")) {
            $(this).attr('class', "future");
            //console.log("future");
        } else if (parsed == today.format("H")) {
            $(this).attr('class', "present");
            //console.log("present");
        } else {
            $(this).attr('class', "past");
            //console.log("past");
        }
    })
}

setColor();
//---------------------------------------------------------------------------------------------------

function displayValue() {
    
    timeBlock.each(function( index ) {
        //event.stopPropagation();
        scheduInput = JSON.parse(localStorage.getItem($(this).data("hour"))); 
        //console.log($(this).val());
        console.log(scheduInput);
        
        $(this).val(scheduInput);
            
    })
}

function saveValue(event) {
    //event.stopPropagation();
    var scheduHour = event.target.id;
        
    //timeBlock.val("")
    timeBlock.each(function( index ) {
        event.stopPropagation();
        scheduInput = $(this).val();
        console.log($(this).data("hour"));

        if ($(this).data("hour") == scheduHour) {
        localStorage.setItem(scheduHour, JSON.stringify(scheduInput));
        console.log(scheduHour, scheduInput);
        } else {
            return;
        }
        $(this).val("");
    })
    //console.log(scheduInput);
    
    displayValue();
}
saveBtn.on("click", saveValue);

window.onload = displayValue;
