var center = document.createElement('center'); // centralize all tags
var ChessTable = document.createElement('table'); //creates a table
for (var i = 0; i <= 7; i++) {  // iterates function
    var tr = document.createElement('tr');  // creates a row
    for (var j = 0; j <= 7; j++) {
        var td = document.createElement('td');    // creates a cell
        if ((i + j) % 2 == 0) {    // if sum of cells is even then color white
            td.setAttribute('class', 'cell whitecell');    // creates class with white cells
            tr.appendChild(td);
        }
        else {    // if sum of cells is odd then color black
            td.setAttribute('class', 'cell blackcell');  // creates class with black cells 
            tr.appendChild(td);    // appends cellto its row
        }
    }
    ChessTable.appendChild(tr);    // appends row ie adding objects at th end of the row
}

// styling table attribute
center.appendChild(ChessTable);
ChessTable.setAttribute('cellspacing', '0');
ChessTable.setAttribute('width', '270px');
document.body.appendChild(center);