let mainHeadingEl = document.getElementById("mainHeading")
let buttonRestart = document.getElementById("buttonRestart")
let box1 = document.getElementById("box1")
let box2 = document.getElementById("box2")
let box3 = document.getElementById("box3")
let box4 = document.getElementById("box4")
let box5 = document.getElementById("box5")
let box6 = document.getElementById("box6")
let box7 = document.getElementById("box7")
let box8 = document.getElementById("box8")
let box9 = document.getElementById("box9")

let xTurn = "X";
let oTurn = "O";
let zTurn = ""
let currentPlayer = xTurn
let filledArray = [null, null, null, null, null, null, null, null, null]
let arrayWins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

function restartGame() {
    box1.textContent = ""
    box2.textContent = ""
    box3.textContent = ""
    box4.textContent = ""
    box5.textContent = ""
    box6.textContent = ""
    box7.textContent = ""
    box8.textContent = ""
    box9.textContent = ""
    mainHeadingEl.textContent = "Tic Tac Toe"
    currentPlayer = xTurn
    filledArray = [null, null, null, null, null, null, null, null, null]
}

function gotWin() {
    for (let each of arrayWins) {
        let [a, b, c] = each
        if (filledArray[a] === xTurn && filledArray[b] === xTurn && filledArray[c] === xTurn) {
            console.log("wib")
            currentPlayer = zTurn
            filledArray = [null, null, null, null, null, null, null, null, null]
            mainHeadingEl.textContent = "X has Won"
            console.log(each)


        }
        if (filledArray[a] === oTurn && filledArray[b] === oTurn && filledArray[c] === oTurn) {
            console.log("wib")
            mainHeadingEl.textContent = "O has Won"
            currentPlayer = zTurn
            filledArray = [null, null, null, null, null, null, null, null, null]



        }

    }
}
gotWin()

function fillIt1() {
    if (box1.textContent === "") {
        box1.textContent = currentPlayer
        box1.classList.add("Xstyling")
        filledArray[0] = currentPlayer
        if (currentPlayer === xTurn) {
            currentPlayer = oTurn
        } else if (currentPlayer === oTurn) {
            currentPlayer = xTurn
        } else if (currentPlayer === zTurn) {
            currentPlayer = zTurn
        }
        gotWin()
    }
}

function fillIt2() {
    if (box2.textContent === "") {
        box2.textContent = currentPlayer
        box2.classList.add("Xstyling")
        filledArray[1] = currentPlayer
        if (currentPlayer === xTurn) {
            currentPlayer = oTurn
        } else if (currentPlayer === oTurn) {
            currentPlayer = xTurn
        } else if (currentPlayer === zTurn) {
            currentPlayer = zTurn
        }
        gotWin()
    }
}

function fillIt3() {
    if (box3.textContent === "") {
        box3.textContent = currentPlayer
        box3.classList.add("Xstyling")
        filledArray[2] = currentPlayer
        if (currentPlayer === xTurn) {
            currentPlayer = oTurn
        } else if (currentPlayer === oTurn) {
            currentPlayer = xTurn
        } else if (currentPlayer === zTurn) {
            currentPlayer = zTurn
        }
        gotWin()
    }
}

function fillIt4() {
    if (box4.textContent === "") {
        box4.textContent = currentPlayer
        box4.classList.add("Xstyling")
        filledArray[3] = currentPlayer
        if (currentPlayer === xTurn) {
            currentPlayer = oTurn
        } else if (currentPlayer === oTurn) {
            currentPlayer = xTurn
        } else if (currentPlayer === zTurn) {
            currentPlayer = zTurn
        }
        gotWin()
    }
}

function fillIt5() {
    if (box5.textContent === "") {
        box5.textContent = currentPlayer
        box5.classList.add("Xstyling")
        filledArray[4] = currentPlayer
        if (currentPlayer === xTurn) {
            currentPlayer = oTurn
        } else if (currentPlayer === oTurn) {
            currentPlayer = xTurn
        } else if (currentPlayer === zTurn) {
            currentPlayer = zTurn
        }
        gotWin()
    }
}

function fillIt6() {
    if (box6.textContent === "") {
        box6.textContent = currentPlayer
        box6.classList.add("Xstyling")
        filledArray[5] = currentPlayer
        if (currentPlayer === xTurn) {
            currentPlayer = oTurn
        } else if (currentPlayer === oTurn) {
            currentPlayer = xTurn
        } else if (currentPlayer === zTurn) {
            currentPlayer = zTurn
        }
        gotWin()
    }
}

function fillIt7() {
    if (box7.textContent === "") {
        box7.textContent = currentPlayer
        box7.classList.add("Xstyling")
        filledArray[6] = currentPlayer
        if (currentPlayer === xTurn) {
            currentPlayer = oTurn
        } else if (currentPlayer === oTurn) {
            currentPlayer = xTurn
        } else if (currentPlayer === zTurn) {
            currentPlayer = zTurn
        }
        gotWin()
    }
}

function fillIt8() {
    if (box8.textContent === "") {
        box8.textContent = currentPlayer
        box8.classList.add("Xstyling")
        filledArray[7] = currentPlayer
        if (currentPlayer === xTurn) {
            currentPlayer = oTurn
        } else if (currentPlayer === oTurn) {
            currentPlayer = xTurn
        } else if (currentPlayer === zTurn) {
            currentPlayer = zTurn
        }
        gotWin()
    }
}

function fillIt9() {
    if (box9.textContent === "") {
        box9.textContent = currentPlayer
        box9.classList.add("Xstyling")
        filledArray[8] = currentPlayer
        if (currentPlayer === xTurn) {
            currentPlayer = oTurn
        } else if (currentPlayer === oTurn) {
            currentPlayer = xTurn
        } else if (currentPlayer === zTurn) {
            currentPlayer = zTurn
        }
        gotWin()
    }
}


box1.addEventListener("click", fillIt1)
box2.addEventListener("click", fillIt2)
box3.addEventListener("click", fillIt3)
box4.addEventListener("click", fillIt4)
box5.addEventListener("click", fillIt5)
box6.addEventListener("click", fillIt6)
box7.addEventListener("click", fillIt7)
box8.addEventListener("click", fillIt8)
box9.addEventListener("click", fillIt9)
buttonRestart.addEventListener("click", restartGame)