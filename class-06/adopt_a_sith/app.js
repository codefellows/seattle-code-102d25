let userName = prompt('What is your Name?');
document.write(userName);

let picture_url = 'https://i1.wp.com/moviesmatrix.com/wp-content/uploads/2020/10/Sith.jpg';

document.write('<img ' + 'src=' + '"' + picture_url + '">');

if (userName == 'Roger'){
    document.write('<h3>' + 'Welcome Darth Roger' + '</h3>');
} else {
    document.write('<h4>' + 'Welcome' + '</h4>');
}

let url = 'https://i.pinimg.com/originals/e1/1a/3e/e11a3ec1bd6c2c05bc576985c66ca62a.png'

document.write('<img ' + 'src=' + '"' + url + '">');
document.write('<img ' + 'src=' + '"' + url + '">')
document.write('<img ' + 'src=' + '"' + url + '">')
