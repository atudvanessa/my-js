// The sum of a range
range = (start, end) => {
    let array = [];
    for (let i = start; i <= end; i++) {
        array.push(i);
    }
    return array;
}
console.log(range(1, 10));



sum = (numbers) => {
    let sum=0;
     numbers.forEach((i)=>{
      sum+=i;
     })
     return sum;
   }
   console.log(sum(range(1, 10)));



   range = (start,end,step) => {
     let range=[];
     if(step>0){
       for(var i=start; i<=end; i+=step){
         range.push(i);
       }
     }
     else if(step<0) {
       for(var i=start; i>=end; i+=step){
         range.push(i);
       }
     }
     else {
        for(var i=start; i<=end; i++){
         rangeArray.push(i);
       }    
     }
     return rangeArray;
   }
   console.log(range(5, 2, -1));


   //Reversingan array

   reverseArray = (arr) => {
    let reversed=[]
    for(let i=arr.length-1; i>=0; i--){
         reversed.push(arr[i]); 
       }
     return reversed;
   }
   console.log(reverseArray(["A", "B", "C"]));


   reverseArrayInPlace = (arr) => {
     let count=0;
     for(let i=0; i<=Math.floor(arr.length/2); i++){
       var ascendingEl= arr[i];
    
       arr[i] = arr[arr.length-1-i]
       arr[arr.length-1-i]=ascendingEl;
     }
    return arr;
   }
   var arrayValue = [1, 2, 3, 4, 5];
   reverseArrayInPlace(arrayValue);
   console.log(arrayValue);


   // A list
   arrayToList = () =>{
    
   }



   //Deep comprission
   deepEqual = (obj1, obj2) => {
    return JSON.stringify(obj1) === JSON.stringify(obj2) ? true:false;
  }
  var obj = {here: {is: "an"}, object: 2};
  console.log(deepEqual(obj,obj));
  
  console.log(deepEqual(obj, {here: 1, object: 2}));
  
  console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
 