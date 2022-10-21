const Calculator = function () {};

Calculator.prototype.add = function (a: number, b: number) {
	if (a === 0) return b;
	if (b === 0) return a;
	return a + b;
};

Calculator.prototype.multiple = function (a: number, b: number) {
	if (a === 0 || b === 0) {
		return 0;
	}
	return a * b;
};

Calculator.prototype.subrtract = function (a: number, b: number) {
	return a - b;
};

Calculator.prototype.add = function (a: number, b: number) {
	return a / b;
};
