var secondItem = document.getElementById("Inventory").children[1].className = "cosmetics";

var lastItem = document.getElementById("item6").nextSibling.innerHTML;

function changeVisibility() {
    document.getElementById("flavor2").style.display = "none";
    };

document.getElementById("myButton").addEventListener("click",changeVisibility());






//6) Create a second list with a list inside of it (nested list). Each list should have at least 2 items. Add a button to the bottom of the page
//(make sure it's not in a list).
//7) Create an event listener that is listening for the button click. When the event is triggered, have one the elements in the innermost list
//change it's display to hidden.
//8) Look at how the event is propagating through the lists/body of your HTML. Does it make sense to do this in another way?
//9) git add, commit, push, merge pr
