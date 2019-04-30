'use strict';

/**
 * Генерация HTML списка друзей
 * @param {Friend[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList (friends) {
	let HTMLUListElement = document.createElement('ul');
	
	for (let i = 0; i < friends.length; i++) {
		let fullName = [];

		for (let key in friends[i]) {
			fullName.push(friends[i][key]);
		};
		
		HTMLUListElement.innerHTML += '<li>' + fullName.join(' ') + '</li>\n';
    };
	
	return HTMLUListElement;
}
