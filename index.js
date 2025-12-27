let scoreLeft = document.getElementById("black-box-home")
let scoreRight = document.getElementById("black-box-away")
let scoreHome = 0;
let scoreAway = 0;



function incrementLeft1() {
 scoreHome = scoreHome + 1   
 scoreLeft.innerText = scoreHome
}

function incrementLeft2() {
 scoreHome = scoreHome + 2    
 scoreLeft.innerText = scoreHome
}

function incrementLeft3() {
 scoreHome = scoreHome + 3 
 scoreLeft.innerText = scoreHome
}

function incrementRight1() {
 scoreAway = scoreAway + 1   
 scoreRight.innerText = scoreAway
}

function incrementRight2() {
 scoreAway = scoreAway + 2    
 scoreRight.innerText = scoreAway
}

function incrementRight3() {
 scoreAway = scoreAway + 3 
 scoreRight.innerText = scoreAway
}
