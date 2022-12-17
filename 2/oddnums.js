const lower=-3;
const upper=21;
function oddPrinter(lower, upper){
    //use a for loop to log all odd numbers between min and max
    //do not include min and max
    for (i=lower+1; i< upper;i++ ){
        if (i%2 === 0){// DO NOTHING IF EVEN
        }
        else{ // PRINT
            console.log(i)
        }
    }
}
oddPrinter(lower,upper);