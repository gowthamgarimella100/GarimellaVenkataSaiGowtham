function oddseries(x){
  if(x <= 0) 
  return;
  let i = 1;
  let result = [];
  for (let count = 0; count < x; count++){
     result.push(i); 
     console.log(result.join(','));
    i += 2 ;
  }
}
oddseries(5);
