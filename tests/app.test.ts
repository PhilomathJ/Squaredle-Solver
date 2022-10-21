describe('calculator logic', function () {
	beforeEach(function () {
		this.calculator = new Calculator();
	});

	it('should add numbers', function () {
		expect(this.calculator.add(2, 2)).toBe(5);
	});
});
