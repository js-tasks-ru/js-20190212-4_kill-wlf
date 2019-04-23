'use strict';
/**
 * calendar Func
 */
 

 
let calendar = {
    from: new Date('2018-01-01T15:09:10Z'),
    to: new Date('2018-02-01T10:09:10Z')
};

calendar[Symbol.iterator] = function () {
	let current = this.from;
	let last = this.to;
	
	return {
		next() {
			if(current < last) {
				return {
					done: false,
					value: current.setDate(current.getDate()+1)
				};
				
			} else {
				return {
					done: true
				};
			}
		}	
	}
};

let str = '';

var formatter = new Intl.DateTimeFormat("ru", {
  day: "2-digit",
});

for (let date of calendar) {
	let formDate = new Date(date);

	if(formDate.getDay() == 0 || formDate.getDay() == 6) str += '[' + formatter.format(formDate) + ']\n';
	else str += formatter.format(formDate) + '\n';
};
