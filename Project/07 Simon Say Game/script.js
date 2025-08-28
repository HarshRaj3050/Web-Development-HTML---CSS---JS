let gameSeq = [];
let userSeq = [];
let btn = ["red", "green", "yellow", "blue"];

let started = false;
let level = 0;
let highLevel = 0;
let preLevel = 0;

let h2 = document.querySelector("h2");
let highScore = document.querySelector(".high-score");
let preScore = document.querySelector(".pre-score");

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("game start !!!");
        started = true;
        levelUp();
    }
});

function flash(btn) {
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 300);
}

function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(() => {
        btn.classList.remove("userFlash")
    }, 300);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    randIdx = Math.floor(Math.random() * 4);
    randColor = btn[randIdx];
    randBtn = document.querySelector(`.${randColor}`);
    flash(randBtn);

    // console.log(randIdx)
    // console.log(randColor)
    // console.log(randBtn)

    gameSeq.push(randColor);
    console.log(gameSeq);
}

function checkBtn(idx) {
    if (gameSeq[idx] == userSeq[idx]) {
        if (gameSeq.length === userSeq.length) {
            setTimeout(() => {
                levelUp();
            }, 1000);
        }

    } else {
        h2.innerHTML = `<b>GAME OVER !!</b> Press any key to start game`;
        reset();
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(() => {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        setTimeout(() => {
            document.querySelector("body").style.backgroundColor = "red";
        }, 300);
        setTimeout(() => {
            document.querySelector("body").style.backgroundColor = "white";
        }, 450);

    }
}

function btnPress() {
    let button = this;
    userFlash(button);

    let userColor = button.getAttribute("id");
    userSeq.push(userColor);
    console.log(userColor);
    checkBtn(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (b of allBtns) {
    b.addEventListener("click", btnPress);
}

function reset() {
    userSeq = [];
    started = false;
    if (level > highLevel) {
        highScore.innerText = `High Score : ${level}`;
        highLevel = level;
    }
    if(gameSeq.length > 0) {
        preScore.innerText = `Previous Score : ${level}`;
    }
    gameSeq = [];
    level = 0;
}
