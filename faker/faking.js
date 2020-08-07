var faker = require('faker');

var name = faker.name.findName();
var email = faker.internet.email();
var picture = faker.image.avatar();

function makeCard(){
    document.getElementById("name").innerHTML = name;
    document.getElementById("email").innerHTML = email;
    document.getElementById("picture").src = picture;
}

makeCard();


//1) In your week5 repo, in your practice branch, create an faker.html, and a faking.js (don't call it faker, may cause issues), and optionally a faker.css.
//2) using the faker API (can use CDN or NPM) create a card of a random person. It should have at least their name, picture, and email. Add content as you'd like.
//3) test test test
//4) optionally design it.
//5) git add, commit, push, merge pr
