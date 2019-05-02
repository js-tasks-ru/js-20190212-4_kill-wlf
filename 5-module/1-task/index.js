'use strict';

/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
	
	const data = document.body.getElementsByTagName('td');
	
	for (let i = 0; i < data.length; i++) {
		//Проставит класс available/unavailable, в зависимости от значения атрибута data-available у ячейки Status
		if (data[i].hasAttribute('data-available')) {
			if (data[i].dataset.available === 'true') data[i].parentElement.classList.add('available');
			else data[i].parentElement.classList.add('unavailable');
		}
		
		//Проставит аттрибут hidden, если  data-available атрибута нет вообще
		//if (data[i].hasAttribute('data-available') == false) data[i].parentElement.setAttribute('hidden', true);
		
		//Проставит класс male/female, в зависимости от содержимого ячекйки Gender
		if (data[i].innerHTML == 'm') {
			data[i].parentElement.classList.add('Male');
		}
		else if (data[i].innerHTML == 'f') {
			data[i].parentElement.classList.add('Female');
		}
		
		//'Установит inline-стиль style="text-decoration: line-through", если значение ячейки Age меньше 18'
		if (isFinite(data[i].innerHTML)) {
			let num = data[i].innerHTML;
			if (num < 18) data[i].parentElement.style.textDecoration ='line-through';
		}
		
		
	}
	
}
