function oddseries(x){
  if(x <= 0) 
  return;
  let i = 1;
  for (let count = 0; count < x; count++){
    console.log(i);
    i += 2 ;
  }
  return;
}
oddseries(5);
