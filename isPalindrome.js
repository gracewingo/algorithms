const isPalindrome = function(x) {

    //first reverse the number 
    if (x < 0 || x % 10 === 0 && x !== 0) return false;

    let reverse = 0;
    let num = x;
    while(num > reverse) {
        reverse = num % 10 + reverse * 10;
        console.log(reverse)
        num = parseInt(num/10);
    }
    return  (num === reverse || num === parseInt(reverse/10));
};

console.log(isPalindrome(1241242))
