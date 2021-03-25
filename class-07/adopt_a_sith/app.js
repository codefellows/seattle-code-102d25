
let userName = prompt('What is your Name?');

let moveForward = prompt('Do you want to continue')

    if(moveForward.toLowerCase() == 'no'){
        moveForward = prompt('Do you want to continue');
    }

function getUserName(){
    document.write(userName);
    return userName;
}

function userHearts(){
    let userAnswer = confirm('Do you Want Hearts');
    let url = 'https://i.pinimg.com/originals/e1/1a/3e/e11a3ec1bd6c2c05bc576985c66ca62a.png'

    if (userAnswer) {
        document.write('<img ' + 'src=' + '"' + url + '" id="heart">');
    }
}

function isUserRoger(){
    if (userName == 'Roger'){
        document.write('<h3>' + 'Welcome Darth Roger' + '</h3>');
    } else {
        document.write('<h4>' + 'Welcome' + '</h4>');
    }
}