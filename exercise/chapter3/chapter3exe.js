//minimum
function minimum(x, y) {
    if (x < y) 
    return x;
    else return y;
  }
  console.log(minimum(-1, 5));// here -1 will be printed out bcs it is less y
  console.log(minimum(1, -5)); //here -5 will be printed out bcs it is less x



  //recursion
  function isEven(n) {
    if (n == 0) return true;
    else if (n == 1) return false;
    else if (n < 0) return isEven(-n);
    else return isEven(n - 2);
  }
  
  console.log(isEven(50));

  console.log(isEven(75));
  
  console.log(isEven(-1));



  //bean counting
  function countChar(string, ch) {
    let counted = 0;
    for (let i = 0; i < string.length; i++) {
      if (string[i] == ch) {
        counted += 1;
      }
    }
    return counted;
  }
  
  function countBs(string) {
    return countChar(string, "B");
  }
  
  console.log(countBs("BBC"));

  console.log(countChar("kakkerlak", "k"));


  //findx the factorial of a number

  let n = 0;
  function factorial(n){
    if (n<0)return null;
    if (n<2)return 1;
    return n * factorial(n - 1);
  }
console.log(n)


// function factorial(n){
//   var result = n;
//   if(n<0){
//     return null;
//   }
//   if(n===1||n===0){
//  return 1;
//   } else {
//   while(n>=2){
//   result = result * (n-1); 
//   n--;
//  }
//  return result;
//  }
//  }
//  console.log(factorial(1));
 