// alert('Enter Number');

let rows = prompt("Enter rows: ");
let  cols = prompt("Enter colums: ");

if (rows == "" || rows == null) {
    rows = 10
}
if (cols == "" || rows == null) {
    cols = 10
}

createTable(rows, cols)

function createTable(rows, cols) {
    let output = "<table border = '1' width = '500' cellpadding = '0' cellspacing = '0'>"
 
    for (let i = 1; i <= rows; i++) {
        output = output + "<tr>";
        for (let j = 1; j <= cols; j++) {
            output = output + "<td>" + `${j} x ${i} = ` +  i * j + "</td>";
        }
        output = output + "<tr>";
        j = i;
    }
    output = output + "</table>"
    document.getElementById("table").innerHTML = output;
}