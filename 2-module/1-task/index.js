/**
 * Клонируем объект
 * @param {Object} obj - клонируем объект
 * @returns {Object}
 */
'use strict';

function clone(obj) {
	let objCopy;
	
	switch (typeof obj) {
	case "object":
		if (obj === null) {
			objCopy = null;
		} else {
			objCopy = Object.keys(obj).reduce(function(prev, key) {
                            prev[key] = clone(obj[key]);
                            return prev;
                        }, {});
						break;
		}
	default:
        objCopy = obj;
        break;
	}
	
	return objCopy;
}