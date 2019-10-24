/*Write a program that prints out the numbers 1 to 100 (inclusive). 
If the number is divisible by 3, print Crackle instead of the number. 
If it's divisible by 5, print Pop. 
If it's divisible by both 3 and 5, print CracklePop. 
*/

function cracklePop(){
    for(let i = 1; i <= 100; i++){     
        if (i % 3 === 0 && i % 5 === 0){
            console.log(i + " CracklePop");
        } else if (i % 5 === 0){
            console.log(i + " Pop");
        } else if (i % 3 === 0) {
            console.log(i + " Crackle")
        } else {
            console.log(i)
        }
    }
}

cracklePop();
