'use strict';

/**
 * Эту функцию трогать не нужно
 */
function print (text) {
    alert(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
 
function isValid (name) {
	if (name.length > 0) {
		if (name.length > 3 && name.indexOf(' ') == -1) return true;
		else return false;
	}
	else return false;
}

function sayHello () {
    let userName = prompt('Введите ваше имя', '...');
	if (isValid(userName)) {
		print('Welcome back, ' + userName + '!');
	} else {
		print('Некорректное имя');
	}
}

sayHello();