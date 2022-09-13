//looping a triangle
var output = "#"
while(output.length <=7 ){
    console.log(output);
    output = output + "#";  
}


//FizzBuzz
var output="",x,y,a;
for (a=1;a<=100;a++)
{
    x = a%3 ==0;
    y = a%5 ==0;
    if(x)
    {
        output+="fizz"
    }
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
console.log
