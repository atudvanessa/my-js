//looping a triangle
var output = "#"
while(output.length <=7 ){
    console.log(output);
    output = output + "#"; //statement has no return value 
}


//FizzBuzz
var output="",x,y,a;
for (a=1;a<=100;a++)
{
    x = a%3 ==0;    //fizz multiple of 3
    y = a%5 ==0;    //buzz multiple of 5
    if(x)
    {
        output+="fizz"   //using the if statement each condition is checked individually
    }                    //if a is divisible by 3 you print fizz if divisible by 5 you print buzz
    if (y)
    {
        output+="buzz"
    }
    if (!(x||y))
    {
        output+=a;
    }
    output+="\n"
}
console.log(output);


//Chessboard
let size = 8;
let board = "";
for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);
