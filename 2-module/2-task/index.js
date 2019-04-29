'use script'

/**
 * Клонируем объект
 * @param {Object} obj - объект в котором ищем
 * @param {*} value - значение, которе ищем
 * @returns {Object}
 */

function find (obj, value) {
	let arr = [];
	let str = '';
	findRecur(obj, value);
	
	function findRecur (obj, value) {
		for (let key in obj){
			if (typeof(obj[key]) === 'object') { //проходимся по ключам, если ключ это объект, то пускаем рекурсию в этот объект, попутно записывая начало адреса.
				str += key+'.';
				findRecur(obj[key], value);
			}
			else if (obj[key] === value) { //если значение ключа равно искомому значению, то плюсуем остаток адреса к строке, пихаем строку в массив и обнуляем ее.
				str += key;
				arr.unshift(str);
				str = '';
			};	 	
		};
	}
	
	if (arr.length == 1) return arr.join(''); //если только один элемент в массиве, то возвращаем строку
	else if (arr.length == 0) return null; //нулл если ничего не нашли
	return arr; 
}