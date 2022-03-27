# Daily_Work_Calendar

For this assignment we've been tasked to create a 24-hour calendar,capable of not only recording our input  for later inspection, but also keeps time of when events have transpired in time.

Because of this, there are a couple big things;
    
    --The hero element at the top of the page indicates the  actual current date.
    --A 24-Hour timer is going, dynamically changing the styles of elements depending on the time of day.
    --The rows are input-boxes, which ctatlogue their contents to local storage.
    --The row elements have buttons which clear their contents.

For This, we're breaking this up into four(?) parts: a Current-Date Tracker, a 24-Hour Tracker, input-boxes that save their contents, and buttons which clear their contents.


## Some Ideas

--Considering making a 24-item array to catalogue the inputs, rather than 24-seperate items in storage.

--Do i need two timer functions? one for the date, and one for the hour? or can i have one function do both?
    + For now, i will keep them seperate...

## Day One

Tonight, I will just be focusing on making the Date-Tracker for the hero element at the top of the page.

So far, I have set up the Date-Tracker. I have also set up a function to keep track of how many hours in the day have passed; now i need to figure out how to take the number displayed and turn it into a number for if/else statements.

## Day Two

Today, I want to focus on the input boxes for the webpage.
Because I'm working with Bootstrap, I should be able to customize them pretty quickly;

    --There is the time of the day; each hour of the day gets it's own box, meaning we get 24 boxes.
    --There are the input boxes themselves; these will record the responses and save them to local storage.
    --There is also a delete button; this will delete what was saved in the item-box.

Next thing i want to work on is to see if i can make the text-boxes change color depending on the time of day?

## Day Three

I was able to get the schedule boxes to change color! The part that was messing me up was the fact that i was trying to get the function to apply to multiple items with the SAME ID... but ID's are only for one HTML element! Switching it to a class made it way easier.

Like with the Real-Time-Clock;

    --I needed to parse the data value i assigned to each schedule block (9 through 17 respectively for military time), then ran it through an if/then function; comparing it to my real-time miltary clock hour tracker.

Interestingly,doing so over-wrote my other class styles...

Next, I'll tackle the localStorage issue.

Local storage is halfway done, but Ive hit a snag. No matter which button i push, or which input box i fill in, it only takes the value from the first box, and then applies it to all the values in storage!


## Things I like/Don't Like

The webpage is completely function now! Reflecting back on my process;

### Things I liked:
    --Moment.js is a really useful library to have, and it's use is very wide!
    --Bootstrap makes it very easy to slap a mockup HTML page, so I have a baseboard to work from for the js!
    --each() functions are going to be a livesaver in the future, as it allows me to affect multiple items of the same class in the HTML!

### Things I Need to Work On:
    --My codes easily got out of hand on this project, as I was overthinking the prerequisites for the grade. Gotta keep it DRY.
    --Obviously, something happened in the CSS that caused my layout to be funky in widescreen mode. Definitely will fix that in the future for re-submission.
    
