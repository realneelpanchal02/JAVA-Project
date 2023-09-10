let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");

let btns = ["green", "red", "yellow", "blue"];

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("game started");
        started == true;


        levelUp();
    }

});

function gameFlash(btn){
    btn.classList.add("flash");

    setTimeout(function(){
        btn.classList.remove("flash");
    }, 300)
}

function userFlash(btn){
    btn.classList.add("userflash");

    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 300)
}

function levelUp (){
    userSeq = [];
    level++;
    h2.innerh = `Level ${level}`;

    //random btn press
    let ranIdx = Math.floor(Math.random()* 3);
    let ranColor = btns[ranIdx];
    let ranBtn = document.querySelector(`.${ranColor}`);
    //console.log(ranIdx);
    //console.log(ranColor);
    //console.log(ranBtn);
    gameSeq.push(ranColor);
    console.log(gameSeq);

    
    gameFlash(ranBtn);
}


function checkAns(idx){
    console.log(`currt level :`, level);
    //let idx = level-1;

    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    }else{
        h2.innerHTML = `Game over! Your score was <b>${level}</b><br>Press any key to start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }
}

function btnsPress(){
    //console.log("Button was pressed");
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
    
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnsPress)
}

function reset(){
    started == false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}