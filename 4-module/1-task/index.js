'use strict';

/**
 * Генерация HTML списка друзей
 * @param {Friend[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList (friends) {
	let HTMLUListElement = document.createElement('ul');
	
	for (let i = 0; i < friends.length; i++) {
		for (let key in friends[i]) {
			HTMLUListElement.innerHTML += '<li>' + key + ' ' + friends[i][key] + '</li>\n';
		};
    };
	
	return HTMLUListElement;
}
