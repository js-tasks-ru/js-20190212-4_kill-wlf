/**
 * Клонируем объект
 * @param {Object} obj - клонируем объект
 * @returns {Object}
 */
'use strict';

function clone (obj) {
	let newObj = {};
	
	for (let key in obj) {
		newObj[key] = obj[key];
	};
	
	return newObj;
}
console.log('Мануальные тесты:');
let obj1 = {test: 1};
let obj2 = {test: { test2: { test3: '1' } }};
let obj3 = {test: { test2: { test3: null } }};

console.log('тест 1:');
console.log(clone(obj1) !== obj1);
console.log(clone(obj1).test === obj1.test);

console.log('тест 2:');
console.log(clone(obj2) !== obj2);
console.log(clone(obj2).test.test2 !== obj2.test.test2);
console.log(clone(obj2).test.test2.test3 === obj2.test.test2.test3);

console.log('тест 3:');
console.log(clone(obj3) !== obj3);
console.log(clone(obj3).test.test2 !== obj3.test.test2);
console.log(clone(obj3).test.test2.test3 === obj3.test.test2.test3);
