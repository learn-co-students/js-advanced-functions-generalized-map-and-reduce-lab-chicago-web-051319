// Add your functions here
function map(sourceArray, fxn){
  let newArr = [];
  for (let i=0; i<sourceArray.length; i++){
    newArr.push(fxn(sourceArray[i]))
  }
  return newArr;
}

function reduce(sourceArray, fxn, starting=0){
  let answer = true
  let total = starting
  for (let i=0; i<sourceArray.length; i++){
    answer = fxn(sourceArray[i], total)
    total += sourceArray[i]
  }
  return answer
}
