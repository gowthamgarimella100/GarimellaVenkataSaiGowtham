const givenArray = [1,2,3,4,5,6,7,8,9];
const input = [1,2,8,9,12,46,76,82,15,20,30];
function countValue(givenArray,input){
  let answerObj = {};
    for(let item of givenArray){
      let count = input.filter(num => num%item === 0).length;
      answerObj[Number(item)]=count
    }
  return answerObj;
}
let answer = countValue(givenArray,input)
console.log(answer);
