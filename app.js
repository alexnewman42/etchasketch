function createGrid(numOfSquares) {
    var container_Div = document.querySelector(".container");
    var size = 960 / numOfSquares;

    for(var i = 0; i < numOfSquares; i++) {
        var row = document.createElement("div");
        row.className = "row";
        for(var x = 0; x < numOfSquares; x++) {
            var cell = document.createElement("div");
            cell.className = "gridSquare";
            cell.style.height = `${size}px`;
            cell.style.width = `${size}px`;
            row.appendChild(cell);
        }
        container_Div.appendChild(row);
    }
}

createGrid(10);