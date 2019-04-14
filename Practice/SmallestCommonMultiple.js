function findMatchAcrossArrays(value, compareToArrays){
  let counter = 0;
  for(let compareArrayIndex = 0; compareArrayIndex < compareToArrays.length; compareArrayIndex++){
    if(compareToArrays[compareArrayIndex].includes(value)){
      counter++;
    }
    if(counter === compareToArrays.length){
      return true;
    }
  } 
  return false;
}

function smallestCommons(arr) {
    /*
    Find the LCM of these sets of numbers. Multiply each factor the greatest number of times it occurs in any of the numbers. 9 has two 3s, and 21 has one 7, so we multiply 3 two times, and 7 once. This gives us 63, the smallest number that can be divided evenly by 3, 9, and 21.
  
    http://home.avvanta.com/~math/def2.cgi?t=lcm
    */
    let rangeOfNumbers = [];
    let orderedArr = arr.sort();
    let resultArr = [];
    let result = 0;
  
    for(let i = orderedArr[0];i <= orderedArr[1];i++){
      rangeOfNumbers.push(i);
      resultArr.push([]);
    }
  //find the least common multiple of all the numbers in the range
    //multiply each number in the range by the index, starting at 1
    //store the result in a result array of arrays at the index of each number
    //in the range
    /*
    ie: range: 1,2,3,4,5
    ie: result array of arrays: [[1,2,3,4,5,...],[2,4,6,8,10,...],...]
    push the result of the calculation onto the array that belongs to the number in the range.
    */
  //console.log(rangeOfNumbers);
    let multiplier = 1;
    while(result === 0){
      //create our results to find matches on
      for(let index = 0; index < rangeOfNumbers.length; index++){
        resultArr[index].push(rangeOfNumbers[index]*multiplier);
      }
      let firstResultArray = resultArr[0];
      let [,...compareToArrays] = resultArr;
      
      //compare all the arrays to each other for a least common multiple
      for(let resultIndex = 0; resultIndex < firstResultArray.length; resultIndex++){
        let value = firstResultArray[resultIndex];
  
        //each peice in the array
        if(findMatchAcrossArrays(value,compareToArrays)){
          result = value;
        }
      }
      multiplier++;
    }
  
    return result;
  }
  
  
  console.log(smallestCommons([23, 18]));