/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */
function pow (m, n) { 
	let number = m; 
		for (let i = 1; i < n; i++) { 
		number *= m; 
		} 
	return number; 
}