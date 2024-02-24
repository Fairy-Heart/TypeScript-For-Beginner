function sumNumber(a: number, b: number) {
	return a + b;
}

const sumNumber2 = (a: number, b: number) => {
	return a + b;
}

function sumNumber3(a: number, b?: number): number {
	if(b) {
		return a + b;
	}
	return a;
}
