const steamUser = require("./users/steamuser")
const rugCity = require("./games/rugcity")
const halo7 = require("./games/halo7")
const pandamonium = require("./games/pandamonium")
const battlecranes = require("./games/battlecranes")
console.log(rugCity)
const Wonky = new steamUser(99.50);
// function 
// // test HW 3c
Wonky.buyGame(rugCity);
Wonky.buyGame(halo7);
Wonky.buyGame(pandamonium);



// function 
// // test 3d 
Wonky.addToWishlist(battlecranes);
// prevent error addToWishlist(Wonky, rugCity);
//3e
// Write a function on that steamuser that logs out that user's games alphabetically
// verify games first- not in alpha
// console.log(Wonky.games, ` before sort above this line`)
function printGamesAlphabetical (){
    console.log("next should be alpha")
        Wonky.games.sort(
                (x,y) => { //we need to evaluate the names,cuz all objects are 'game'
                if (x.name < y.name){
                    return -1
                }
                if (x.name > y.name){
                    return 1;
                }
                return 0;
            }       
         );
    console.log(Wonky.games);
}
// printGamesAlphabetical();
//3f
// Change the function in 3e) to take in a single argument, `sortType, to let the user decide to sort alpha or price
//copypasta function contents and re-factor

//function 
// sortInput("name");
console.log("Current User status--------------------------")
console.log(Wonky)
//Wonky.sortInput("name")
Wonky.sortInput("price")
Wonky.sortInput("name")