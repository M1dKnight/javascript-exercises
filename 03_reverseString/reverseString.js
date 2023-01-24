const reverseString = function(string) {
    let reverse='';
    const myArr=string.split("");
    for(let i=myArr.length;i>0;i--){
        reverse=reverse.concat('',myArr[i-1]);
    }
    return reverse;
};

// Do not edit below this line
module.exports = reverseString;
