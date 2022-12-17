
// 3c.0 
// declare a class: `SteamUser` that takes one argument in its constructor
// `balance` and sets this property on the user, 
// as well as an empty array `games`
class SteamUser{
    constructor(balance){
        this.games = [];
        this.balance = balance;
        this.wishlist = [];
    }
// 3c.1
// write a function on the steamuser class that lets a user purchase a game
// if they have enough `balance`  to afford the `price` of the game 
//if they cannot afford it, throw an error.
    buyGame(game){
        if (this.balance > game.price){
            this.games.push(game);
            this.balance -= game.price;
            console.log(this.balance)
            console.log(`you have purhased ${game.name} for ${game.price} and your remaining balance is ${this.balance}`)
        }
        else{
            console.log(this.balance)
            console.log(game.price)
            throw error(`not enough balance to purchase this game`);
        }
    }
    // 3d 
// Wwrite a function that steamuser class that lets a user wishlist a game
// if they alredy own it, throw an error
    addToWishlist(game){
        if (this.games.includes(game)){ //throw an error
            throw error(`you already have this game, it cannot be wishlisted`)
        }
        else{
            //add it to the wishlist
            this.wishlist.push(game);
            console.log(`you have added ${game.name} to your wishlist`)
        }
    }
    sortInput(sortType){
        if (sortType === "name"){
            this.games.sort(
                (x,y) => { //we need to evaluate the names,cuz all objects are 'game'
                    if (x.name < y.name){
                        return -1
                    }
                    if (x.name > y.name){
                        return 1;
                    }
                return 0;
                }
               
            ); console.log("this should be by name\n");
            console.log(this.games)
        }
        else if (sortType === "price"){
            this.games.sort(
                (x,y) => { //we need to evaluate the names,cuz all objects are 'game'
                    if (x.price < y.price){
                        return -1
                    }
                    if (x.price > y.price){
                        return 1;
                    }
                return 0;
                }
               
            ); 
            console.log("this should be by price\n")
            console.log(this.games)
        }
        else throw error("you didn't get it did you")
    //console.log(Wonky.games);
    }


} module.exports = SteamUser;