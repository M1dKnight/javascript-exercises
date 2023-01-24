const repeatString = function(string, num) {
    let start="";
    let final='';
    if(Math.sign(num)==-1){
        return "ERROR";
    }
    for(let i = 0;i < num;i++){
        final+=start.concat('',string);
    }
    
    
    return final;
};

// Do not edit below this line
module.exports = repeatString;
