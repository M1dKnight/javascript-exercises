const removeFromArray = function(myArray,toRemove) {
    let newArray=myArray;
    let item=toRemove;
    newArray.forEach(search);
  //.splice();  
  function search(value,index,newArray){
    //current value: check
    //compared value
    if(value==toRemove){ 
    //splice
        newArray.splice(index,1);
    }
  }
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
