/**
 * Клонируем объект
 * @param {Object} obj - объект в котором ищем
 * @param {*} value - значение, которе ищем
 * @returns {Object}
 */
function find (obj, value) {
}

let arr = [];
let str = '';

function find (obj, value) {
	
	for (let key in obj){
		if (typeof(obj[key]) === 'object') { //проходимся по ключам, если ключ это объект, то пускаем рекурсию в этот объект, попутно записывая начало адреса.
			str += key+'.';
			find(obj[key], value);
		}
		else if (obj[key] === value) { //если значение ключа равно искомому значению, то плюсуем остаток адреса к строке, пихаем строку в массив и обнуляем ее.
			str += key;
			arr.unshift(str);
			str = '';
		};	 	
	};
	
	if (arr.length == 1) return arr.join(''); //если только один элемент в массиве, то возвращаем строку
	else if (arr.length == 0) return null; //нулл если ничего не нашли
	return arr; 

}

let obj1 = {
            options: {
                color: 'red'
            }
};

let obj2 = {
            options: {
                color: 'red'
            },
            style: {
                border: {
                    color: 'red'
                }
            }
};
		
let obj3 = {
            options: {
                color: 'red'
            },
            style: {
                border: {
                    color: 'red'
                }
            }
};

console.log(find(obj1, 'red'));
console.log(find(obj2, 'red'));
console.log(find(obj3, 'green'));