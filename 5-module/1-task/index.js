'use strict';

/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
	
	const data = document.body.getElementsByTagName('td');
	//console.log(data[0].parentElement);
	
	for (let elem of data) {
		
		//dataset.available proverka
		if (elem.hasAttribute('data-available')) {
			if (elem.dataset.available === 'true') elem.parentElement.classList.add('available');
			else elem.parentElement.classList.add('unavailable');
		}	
		else elem.setAttribute('hidden', true);
		
		//*sex proverka
		if (elem.innerHTML == 'm') {
			elem.parentElement.classList.add('Male');
			console.log('male gender');
		}
		else if (elem.innerHTML == 'f') {
			elem.parentElement.classList.add('Female');
			console.log('female gender');
		}
		
		//vozrast proverka
		if (isFinite(elem.innerHTML)) {
			let num = elem.innerHTML;
			if (num < 18) elem.style.textDecoration ='line-through';
		}
	}
	
}
