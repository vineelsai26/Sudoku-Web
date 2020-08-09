var grid
var saveGrid
var board

function start() {
    clear()
    grid = [[1, 2, 3, 4, 5, 6, 7, 8, 9],
    [4, 5, 6, 7, 8, 9, 1, 2, 3],
    [7, 8, 9, 1, 2, 3, 4, 5, 6],
    [2, 3, 1, 5, 6, 4, 8, 9, 7],
    [5, 6, 4, 8, 9, 7, 2, 3, 1],
    [8, 9, 7, 2, 3, 1, 5, 6, 4],
    [3, 1, 2, 6, 4, 5, 9, 7, 8],
    [6, 4, 5, 9, 7, 8, 3, 1, 2],
    [9, 7, 8, 3, 1, 2, 6, 4, 5]];
    generateBoard()
}

var btnId

function btn(id){
    if (document.getElementById("btn" + id).classList.contains("editable")){
        btnId = "btn" + id
    }
}

function clearElement(){
    document.getElementById(btnId).textContent = ""
    btnId = ""
}

function btnNums(id){
    document.getElementById(btnId).textContent = id
    btnId = ""
}

function submit(){
    if(checkBoard() == true){
        alert("Congrats you have completed it")
    } else if (checkBoard() == false) {
        alert("Try again!")
    }
}

function check(){
    var id = btnId.split("")
    const x = parseInt(id[3])
    const y = parseInt(id[4])
    console.log(saveGrid)
    // if (parseInt(document.getElementById(btnId).textContent) == parseInt(saveGrid[parseInt(id[3])][parseInt(id[4])])){
    //     alert("No Conflict")
    // } else {
    //     alert("Conflict")
    // }
}

function checkBoard(){
    var x, y
    console.log(saveGrid)
    for (y = 0; y < 9; y++) {
        for (x = 0; x < 9; x++) {
            console.log(saveGrid)
            if (document.getElementById("btn" + x + y).textContent == "" || document.getElementById("btn" + x + y).textContent != saveGrid[x][y]) {
                return false
            }
        }
    }
    return true
}

function generateBoard() {
    shiffleGrid()
    var i
    saveGrid = grid
    console.log(saveGrid)
    var noOfDigits = Math.floor(Math.random() * 20) + 30
    for (i = 1; i <= noOfDigits; i++) {
        const row = Math.floor(Math.random() * 9)
        const col = Math.floor(Math.random() * 9)

        if (grid[row][col] != 0) {
            grid[row][col] = 0;
        } else {
            i--;
        }
    }
    setBoard()
}

function clear() {
    var x, y
    for (y = 0; y < 9; y++) {
        for (x = 0; x < 9; x++) {
            document.getElementById("btn" + x + y).textContent = ""
            document.getElementById("btn" + x + y).classList.remove("editable")
        }
    }
}

function setBoard() {
    var x, y
    for (y = 0; y < 9; y++) {
        for (x = 0; x < 9; x++) {
            if (grid[x][y] != 0) {
                document.getElementById("btn" + x + y).textContent = grid[x][y]
            } else {
                document.getElementById("btn" + x + y).classList.add("editable")
            }
        }
    }
}

function shiffleGrid() {
    var i = 0
    for (i; i < 9; i++) {
        const randomNum = Math.floor(Math.random() * 9)
        swapNum(i, randomNum)
    }
}

function swapNum(n1, n2) {
    var x, y
    for (y = 0; y < 9; y++) {
        for (x = 0; x < 9; x++) {
            if (grid[x][y] == n1)
                grid[x][y] = 0
            if (grid[x][y] == n2)
                grid[x][y] = n1
        }
    }
    for (y = 0; y < 9; y++) {
        for (x = 0; x < 9; x++) {
            if (grid[x][y] == 0)
                grid[x][y] = n2
        }
    }
}