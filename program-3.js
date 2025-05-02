const input_value = 11;
generateOddNumberSeries(input_value);
function generateOddNumberSeries(value){
  let result = [];
  const x = value%2===0?value-1:value
  let y = 1;
  for(let i=0;i<x;i++){
    result.push(y);
    y+=2
  }
  return result.join(',');
}
