//Psuedocode 
/**
 * For every user choice
 * Ai makes a choice
 * compare user choice to ai chose
 * which ever has higher precedence wins
 */
const options = ['Rock', 'Paper', 'Scissors'];
let computerScore = 3;
let userScore = 3;


//UI
function UI () {
    const body = document.querySelector('body');
    const container = document.createElement('main');
    const optionContainer = document.createElement('div');
    const scoreBoxContainer = document.createElement('div');
    

    container.classList.add("canvas")
    optionContainer.classList.add("option-container");
    scoreBoxContainer.classList.add("scorebox-container");

    body.appendChild(container);
    container.appendChild(optionContainer);
    container.appendChild(scoreBoxContainer);
    

    for (let i = 0; i < options.length; i++) {
        const element = document.createElement('option');
        element.value = options[i];
        //element.textContent = options[i];
        optionContainer.appendChild(element);
        element.classList.add("option-container__options");
        element.classList.add("option-container__options--size");
        element.id= options[i];
    }

    for (let index = 1; index < 3; index++) {
        if(index == 1){
            const element = document.createElement('p');
            element.textContent = userScore;
            scoreBoxContainer.appendChild(element);
        }
        if(index == 2){
            const element = document.createElement('p');
            element.textContent = computerScore;
            scoreBoxContainer.appendChild(element);
        }
    }
    const option = document.querySelectorAll('option');
    const optionArray = Array.from(option);
    const imageOption = ['./assests/images/rock.png', './assests/images/paper.png', './assests/images/scissors.png'];
    for (let index = 0; index < imageOption.length; index++) {
        optionArray.forEach((button) => {
        
            button.style.backgroundImage = `url('${imageOption[index++]}')`;
            /*const getImages = document.querySelectorAll('img');
            getImages.forEach(img => {
                img.src = imageOption[index++];
                img.alt = options;
            });   */     
        
        //const image = document.createElement('img');
        //button.appendChild(image);
        });
    } 
}
    /*for (let index = 0; index < imageOption.length; index++) {
    const getImages = document.querySelectorAll('img');
    getImages.forEach(img => {
        img.src = imageOption[index++];
        img.alt = options;
    });        
    }  */  

let listenForUserEvent = document.querySelectorAll('option');



const getComputerChoice = (options) => {
    //Return a Random choice out of the options
    return options[Math.floor(Math.random() * options.length)];
}


listenForUserEvent.forEach((button) =>{
    button.addEventListener('click', () =>{
        const img = button
    })
})

const getUserChoice = (options) => {
    options = listenForUserEvent.values;
    console.log(options);
    return options;
}

function playRound(userChoice, computerChoice) {
    let roundResult = ' ';
    const score = checkScore();
    // for each user choice ai make choice 
    if((computerChoice[0].toLowerCase() == userChoice[0].toLowerCase()) && (score != 0)){
        return " Tie, Try Again";
    }else if(
        (
            (userChoice[0].toLowerCase() == "Rock" && computerChoice[0].toLowerCase() == "Scissors") || 
            (userChoice[0].toLowerCase() == "Paper" && computerChoice[0].toLowerCase() == "Rock") || 
            (userChoice[0].toLowerCase() == "Scissors" && computerChoice[0].toLowerCase() == "Paper")
        ) && (score != 0)
    ){
        roundResult = "You Won This Round, Computer Lose One Life, " + --computerScore + " ";
        return roundResult;
    }else if(
        (
            (userChoice[0].toLowerCase() == "Rock" && computerChoice[0].toLowerCase() == "Paper") || 
            (userChoice[0].toLowerCase() == "Paper" && computerChoice[0].toLowerCase() == "Scissors") || 
            (userChoice[0].toLowerCase() == "Scissors" && computerChoice[0].toLowerCase() == "Rock")
        ) && (score != 0)
    ){
        roundResult = "Computer Won This Round, You Lose One Life, " + --userScore + " ";
        return roundResult;
    }else{
        return " Why is this Not Working";
    }
}

function checkScore () {
    if(userScore == 0){
        return "You Lose";
    }else if(computerScore == 0){
        return "You Win";
    }else{
        return;
    }
}
/*
function recordRoundResults () {
    const roundCount = [];
    for( const rounds of roundCount){
        rounds.push(playRound(getUserChoice(listenForUserEvent), getComputerChoice(options)));
        console.log(rounds);
    }
    return roundCount;
}*/
const run = () => {
    //console.log(playRound(getUserChoice(options), getComputerChoice(options)));
    //console.log(recordRoundResults());   
}

//run();
UI();