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

# Day One

Tonight, I will just be focusing on making the Date-Tracker for the hero element at the top of the page.

So far, I have set up the Date-Tracker. I have also set up a function to keep track of how many hours in the day have passed; now i need to figure out how to take the number displayed and turn it into a number for if/else statements.