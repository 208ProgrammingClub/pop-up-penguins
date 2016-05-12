//The next line of code is pretty advanced but document.ready basically says wait for the 
//document to load before running this function.  
$(document).ready( function() {
    //After your page has loaded the function is started 
    // The following code is what we call a handler for the "mousedown" event 
    // notice we added it to the .yeti class.
    $(".yeti").mousedown(function() {
    // if the <div> containing our yeti is clicked the alert below pops up    
        alert("Oh no!");
    });
});