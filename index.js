// Add your functions here
function map(sourceArray,funct){
    let results = []
    sourceArray.forEach(index =>{
        let result = funct(index)
        results.push(result)
    })
    return results;
}

function reduce(sourceArray, funct, startingPoint){
    let final
    let array
    if (startingPoint){
        final = startingPoint;
        array = sourceArray;
    }
    else {
        final = sourceArray[0];
        array = sourceArray.slice(1); 
    }
    array.forEach(index=>{
        final = funct(index, final)
    })
    return final
}

//generalize these reduce functions!
// function reduceToTotal(src, startingPoint=0) {
//     let total = startingPoint
//     for (let i = 0; i < src.length; i++ ) {
//       total = total + src[i]
//     }
//     return total
//   }
  
//   function reduceToAllTrue(src) {
//     for (let i = 0; i < src.length; i++ ) {
//       if (!src[i]) return false
//     }
//     return true
//   }
  
//   function reduceToAnyTrue(src) {
//     for (let i = 0; i < src.length; i++ ) {
//       if (src[i]) return true
//     }
//     return false
//   }