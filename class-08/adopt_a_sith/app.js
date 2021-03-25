
let userName = prompt('What is your Name?');

function getUserName(){
    document.write(userName);
    return userName;
}

function userHearts(){
    let userAnswer = confirm('Do you Want Hearts');
    let url = 'https://i.pinimg.com/originals/e1/1a/3e/e11a3ec1bd6c2c05bc576985c66ca62a.png'

    if (userAnswer) {
        let userAnswerNumber = prompt('How many Hearts');
        for(let i = 0; i < userAnswerNumber; i++){
            document.write('<img ' + 'src=' + '"' + url + '" id="heart">');
        }
    
    }
}

function isUserRoger(){
    if (userName == 'Roger'){
        document.write('<h3>' + 'Welcome Darth Roger' + '</h3>');
    } else {
        document.write('<h4>' + 'Welcome' + '</h4>');
    }
}

function guessingGame(){
    let guessingGameYesOrNo = prompt('Do you want to play a number guessing game?');

    
    while (guessingGameYesOrNo.toLowerCase() == 'yes'){
        let correctAnswer = Math.floor(Math.random() * 100) + 1;
        let userGuess = prompt('Please enter a number 1-100');
        let numberOfGuesses = 7;

        for(let i = 0; i < numberOfGuesses; i++) {
            let guessLeft = numberOfGuesses - i;
            if(userGuess < correctAnswer){
                userGuess = prompt(guessLeft + ' Guesses left. To Low. Please enter a number 1-100')
            } else if (userGuess > correctAnswer) {
                userGuess = prompt(guessLeft + ' Guesses left. To High! Please enter a number 1-100');
            }
            if (userGuess == correctAnswer){
                alert('You got it!');
                break;
            }
        }
        guessingGameYesOrNo = prompt('Do you want to play a number guessing game?');
    }
}

