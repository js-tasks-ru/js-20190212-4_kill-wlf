'use strict';

/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
	
	const data = document.body.getElementsByTagName('td');
	console.log(data.length);
	
	for ( let i = 0;  i < data.length; i++) {
		
		//dataset.available proverka
		if (data[i].hasAttribute('data-available')) {
			if (data[i].dataset.available === 'true') data[i].classList.add('available');
			else data[i].classList.add('unavailable');
		}	
		else data[i].setAttribute('hidden', true);
		
		//sex proverka
		if (data[i].innerHTML == 'm') {
			data[i].classList.add('Male');
		}
		else if (data[i].innerHTML == 'f') {
			data[i].classList.add('Female');
		}
		
		//vozrast proverka
		if (isFinite(data[i].innerHTML)) {
			let num = data[i].innerHTML;
			if (num < 18) data[i].style.textDecoration ='line-through';
		}
	}
	
}
