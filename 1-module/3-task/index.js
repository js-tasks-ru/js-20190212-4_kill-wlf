'use strict';

/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
 
function getMinMax(str) {
	const obj = {
			min: 0,
			max: 0
		}
		
		for (let i = 0; i < str.length; i++) {
			if (isNumeric(str[i]) || str[i] === '-'){
				const num = parseFloat(str.slice(i));
				
				if (num > obj.max) obj.max = num;
				else if (num < obj.min) obj.min = num;
				
				i += num.toString().length; //двигает i на ячейку после числа
			}	
		}
		
	return obj;
}

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
