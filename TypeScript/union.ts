function sumStringOrNumber(a: number | string, b: number | string) {
	if(typeof a == 'string' || typeof b == 'string') {
		return `${a}`  + `${b}`;
	}
	if(typeof a == 'number' || typeof b == 'number') {
		return a + b;
	}	
}

console.log(`${sumStringOrNumber(12, 35)}`);
