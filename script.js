let computerNum = 0
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");
let chances = 5;
let gameOver = false;
let chanceArea = document.getElementById("chance-area");
let history = [];

playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus", function(){userInput.value=""});


function pickRandoNum(){
    computerNum = Math.floor(Math.random() * 100) + 1;
    // console.log(computerNum);
}


function play(){
    
    let userValue = userInput.value;

    if(userValue<1 || userValue>100){
        resultArea.textContent="1과 100사이 숫자를 입력해주세요";
        return;
    }

    if(history.includes(userValue)){
        resultArea.textContent="이미 입력되었던 숫자입니다.";
        return;
    }
        chances --;
        // console.log(chances);
        chanceArea.textContent = `남은 기회 : ${chances}번`;

        if(userValue < computerNum){
            resultArea.textContent="이 숫자보다 더 큰 숫자입니다.";
        }else if (userValue > computerNum){
            resultArea.textContent="이 숫자보다 더 작은 숫자입니다.";
        }else{
            resultArea.textContent="정답";
            gameOver = true;
        }

        history.push(userValue);
        

        if(chances < 1){
            gameOver = true;
        }
        // console.log(gameOver);
        if(gameOver == true){
            resultArea.textContent="아쉽네요 다음 기회에!.";
            playButton.disabled = true;
        }
}


function reset(){
    userInput.value = "";
    pickRandoNum();
    playButton.disabled = false;
    history = [];
    resultArea.textContent = "새로운 숫자로 변경되었습니다.";
    chances =5;
    chanceArea.textContent = `남은 기회 : 5번`;
}

pickRandoNum();