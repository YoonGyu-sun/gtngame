let computerNum = 0
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");
let chanses = 5;
let gameOver = false;
let chanceArea = document.getElementById("chance-area");
let history = []

playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus", function(){userInput.value=""});


function pickRandoNum(){
    computerNum = Math.floor(Math.random() * 100) + 1;
}

function play(){
    let userValue = userInput.value;

    if(userValue<1 || userValue>100){
        resultArea.textContent="1과 100사이 숫자를 입력해주세요";
        return;
    }

    if(history == userValue){
        resultArea.textContent="이미 입력했던 숫자입니다. 다른 숫자를 입력하세요.";
        return;
    }
        chanses --;
        chanceArea.textContent = `남은 기회 : ${chanses}번`;

        if(userValue < computerNum){
            resultArea.textContent="UP";
        }else if (userValue > computerNum){
            resultArea.textContent="Down";
        }else{
            resultArea.textContent="정답";
            gameOver = true;
        }

        history.push(userValue);

        if(chanses < 1){
            gameOver = true;
        }
        if(gameOver == true){
            playButton.disabled = true;
        }
}


function reset(){
    userInput.value = "";
    pickRandoNum();
    playButton.disabled = false;
    resultArea.textContent = "결과값이 여기 나옵니다";
    // chanses = 5;
    chanceArea.textContent = `남은 기회 : 5번`;
}

pickRandoNum();