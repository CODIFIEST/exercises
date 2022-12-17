const prompt = require("prompt-promise")

async function mathTest(){
    //this function will ask a math question and wait for an answer
    // the answer will be validated and user will get a response
    // if th eguess is correct, let user know and exit
    //if answer is incorrect, user gets 3 total guesses, then program exits.
   let mathAnswer;
    let i=0;
    while (mathAnswer != "666"){
        mathAnswer =  await prompt (`What is 600+66\n`);
        // use gets 3 tries
        if (mathAnswer !="666"){
            console.log("try again\n")}
        i++;
        if (i===3){
            console.log(`GAME OVER, YOU BAD AT MAFFS\n\n`)
            throw error(`GAME OVER, YOU BAD AT MAFFS`)
        }
    }
    console.log(`congats, the correct answer is ${mathAnswer}\n\n`)
    throw error (`congats, the correct answer is ${mathAnswer}`)
}
mathTest();