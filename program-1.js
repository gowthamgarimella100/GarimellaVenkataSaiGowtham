function cal(a,b,opr){
  if(opr=='+')
    return a+b;
  else if(opr=='-')
    return a-b;
  else if(opr=='*')
    return a*b
  else if(opr=='/')
    return a/b
  return "invalid input"
}
console.log(cal(1,2,'+'));
