import plateCalculator from '../lib/plateCalculator';

describe('plateCalculator', () => {

	it('is an object', () => {
		expect(plateCalculator).toEqual(jasmine.any(Object));
	});

	it('Has a calculate function', () => {
		expect(plateCalculator.calculate).toEqual(jasmine.any(Function));
	});

	describe('calculates correctly', () => {

		it('puts two 5 pound plates on the bar for 55 pounds', () => {
			expect(plateCalculator.calculate(55).plates)
				.toEqual([{ plateWeight : 5, qty : 2 }]);
		});

		it('puts correct plates on the bar for 60 pounds', () => {
			expect(plateCalculator.calculate(60).plates)
				.toEqual([
					{ plateWeight : 5, qty : 2 }, { plateWeight : 2.5, qty : 2 }
				]);
		});

		it('puts correct plates on the bar for 65 pounds', () => {
			expect(plateCalculator.calculate(65).plates)
				.toEqual([{ plateWeight : 10, qty : 2 }]);
		});

		it('puts correct plates on the bar for 70 pounds', () => {
			expect(plateCalculator.calculate(70).plates)
				.toEqual([
					{ plateWeight : 10, qty : 2 }, { plateWeight : 2.5, qty : 2 }
				]);
		});

		it('puts correct plates on the bar for 80 pounds', () => {
			expect(plateCalculator.calculate(80).plates)
				.toEqual([
					{ plateWeight : 10, qty : 2 },
					{ plateWeight : 5, qty : 2 },
					{ plateWeight : 2.5, qty : 2 }
				]);
		});

		it('puts correct plates on the bar for 95 pounds', () => {
			expect(plateCalculator.calculate(95).plates)
				.toEqual([{ plateWeight : 25, qty : 2 }]);
		});

		it('puts correct plates on the bar for 115 pounds', () => {
			expect(plateCalculator.calculate(115).plates)
				.toEqual([{ plateWeight : 35, qty : 2 }]);
		});

		it('puts correct plates on the bar for 225 pounds', () => {
			expect(plateCalculator.calculate(225).plates)
				.toEqual([{ plateWeight : 45, qty : 4 }]);
		});
	});

	describe('handles options correctly', () => {
		it('limits to available plates', () => {
			expect(plateCalculator.calculate(225, { availablePlates : { 45 : 2 } }).plates)
				.toEqual([
					{ plateWeight : 45, qty : 2 },
					{ plateWeight : 35, qty : 2 },
					{ plateWeight : 10, qty : 2 }
				]);
		});

		it('handles 0 of a given plate being available', () => {
			expect(plateCalculator.calculate(225, { availablePlates : { 45 : 2, 10 : 0 } }).plates)
				.toEqual([
					{ plateWeight : 45, qty : 2 },
					{ plateWeight : 35, qty : 2 },
					{ plateWeight : 5, qty : 4 }
				]);
		});

		it('handles added plate denominations', () => {
			expect(plateCalculator.calculate(46, {
				addedPlates : [.5]
			}).plates)
				.toEqual([
					{ plateWeight : .5, qty : 2 }
				]);
		})

		it('throws an error when returnClosest is off and weight requested is impossible', () => {
			expect(() => {
				plateCalculator.calculate(46, { returnClosest : false });
			})
				.toThrow();
		})
	});
});
