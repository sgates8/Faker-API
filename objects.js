var faveBook = {
    title: "Warcross",
    authorName: "Marie Lu",
    genre: "Science Fiction",
    description: "a young bounty hunter gets trapped in the dark web looking for hackers in virtual reality game",
    price: 11,
    seller:"Amazon.com"
    buyNow: function(){
        return this.price + " " + this.seller;
    }
    learnMore: function(){
        return this.authorName + ", " + this.genre + ", " + this.description;
    }
};

console.log(faveBook.buyNow());
console.log(faveBook.learnMore());



//title , author name, genre, short description, price, seller, buyNow -method that shows price and seller, learnMore - method that shows name, genre, and short description.
//3) call both of the methods you created.
//4) git add, commit, push, merge pr
