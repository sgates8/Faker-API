var interval = setInterval(countDown, 1000);

function countDown() {
    var now = new Date().getTime();
    var real = new Date().toLocaleTimeString();
    var countDownDate = new Date ("Aug 2, 2021 12:06:00").getTime();
    var timeLeft = countDownDate - now;
    var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeLeft % (1000 * 60 * 24)) / (100 * 60 * 60));
    var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    document.getElementById("realTime").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s " ;
        if (timeLeft < 0) {
            clearInterval(interval);
            document.getElementById("realTime").innerHTML = "HAPPY BIRTHDAY SYLVIA!";
        }

    } 1000;























//1) In your week5 repo and on your practice branch, add a countdown.html, a countdown.js, and optionally a countdown.css.
//2) You will be creating a countdown timer to a certain time and date (Halloween, your birthday, release of a new movie, or let your user pick a date and time if you want to be real fancy).
//3) The increments should show on screen. It should stop when it reaches the date and not go into the negatives.
//4) test test test test.
//5) optional: style it.
//6) git add, commit, push, merge
