const FigureCalculator = require('./FigureCalculator');
const MathBasic = require("./MathBasic");

describe('A FigureCalculator', () => {
    it('should contain CalculatorRectanglePerimeter, calculatorRectangleArea, calculatorTrianglePerimeter, and calculatorTriangleArea functions', () => {
        const figureCalculator = new FigureCalculator({});

        expect(figureCalculator).toHaveProperty('calculateRectanglePerimeter');
        expect(figureCalculator).toHaveProperty('calculateRectangleArea');
        expect(figureCalculator).toHaveProperty('calculateTrianglePerimeter');
        expect(figureCalculator).toHaveProperty('calculateTriangleArea');
        expect(figureCalculator.calculateRectanglePerimeter).toBeInstanceOf(Function);
        expect(figureCalculator.calculateRectangleArea).toBeInstanceOf(Function);
        expect(figureCalculator.calculateTrianglePerimeter).toBeInstanceOf(Function);
        expect(figureCalculator.calculateTriangleArea).toBeInstanceOf(Function);
    });

    describe('A calculateRectanglePerimeter function', () => {
        it('should throw error when not given 2 parameters', () => {
            const figureCalculator = new FigureCalculator({});

            expect(() => figureCalculator.calculateRectanglePerimeter()).toThrowError();
            expect(() => figureCalculator.calculateRectanglePerimeter(1)).toThrowError();
            expect(() => figureCalculator.calculateRectanglePerimeter(1, 2, 3)).toThrowError();
        });

        it('should throw error when given with non-number parameters', () => {
            const figureCalculator = new FigureCalculator({});

            expect(() => figureCalculator.calculateRectanglePerimeter(true, {})).toThrowError();
            expect(() => figureCalculator.calculateRectanglePerimeter(null, '2')).toThrowError();
            expect(() => figureCalculator.calculateRectanglePerimeter([], {})).toThrowError();
        });

        it('should return correct value based on rectangle perimeter formula', () => {
            const length = 20;
            const width = 10;
            const spyAdd = jest.spyOn(MathBasic, 'add');
            const spyMultiply = jest.spyOn(MathBasic, 'multiply');
            const figureCalculator = new FigureCalculator(MathBasic);

            const result = figureCalculator.calculateRectanglePerimeter(length, width);

            expect(result).toEqual(60);
            expect(spyAdd).toHaveBeenCalledWith(length, width);
            expect(spyMultiply).toHaveBeenCalledWith(2, 30);
        });
    });

    describe('A calculateRectangleArea', () => {
        it('should throw error when not given 2 parameters', () => {
            const figureCalculator = new FigureCalculator({});

            expect(() => figureCalculator.calculateRectangleArea()).toThrowError();
            expect(() => figureCalculator.calculateRectangleArea(1)).toThrowError();
            expect(() => figureCalculator.calculateRectangleArea(1, 2, 3)).toThrowError();
        });

        it('should throw error when given with non-number parameters', () => {
            const figureCalculator = new FigureCalculator({});

            expect(() => figureCalculator.calculateRectangleArea(true, {})).toThrowError();
            expect(() => figureCalculator.calculateRectangleArea(null, 2)).toThrowError();
            expect(() => figureCalculator.calculateRectangleArea([], {})).toThrowError();
        });

        it('should return correct value based on rectangle area formula', () => {
            const length = 20;
            const width = 10;
            const spyMultiply = jest.spyOn(MathBasic, 'multiply');
            const figureCalculator = new FigureCalculator(MathBasic);

            const result = figureCalculator.calculateRectangleArea(length, width);

            expect(result).toEqual(200);
            expect(spyMultiply).toHaveBeenCalledWith(length, width);
        });
    });

    describe('A calculateTrianglePerimeter function', () => {
        it('should throw error when not given 3 parameters', () => {
            const figureCalculator = new FigureCalculator({});

            expect(() => figureCalculator.calculateTrianglePerimeter()).toThrowError();
            expect(() => figureCalculator.calculateTrianglePerimeter(1)).toThrowError();
            expect(() => figureCalculator.calculateTrianglePerimeter(1, 2)).toThrowError();
            expect(() => figureCalculator.calculateTrianglePerimeter(1, 2, 3, 4)).toThrowError();
        });

        it('should throw error when given with non-number parameters', () => {
            const figureCalculator = new FigureCalculator({});

            expect(() => figureCalculator.calculateTrianglePerimeter(true, {}, null)).toThrowError();
            expect(() => figureCalculator.calculateTrianglePerimeter(null, 2, [])).toThrowError();
            expect(() => figureCalculator.calculateTrianglePerimeter([], {}, '2')).toThrowError();
        });

        it('should return correct value based on triangle perimeter formula', () => {
            const side1 = 12;
            const side2 = 12;
            const side3 = 24;
            const spyAdd = jest.spyOn(MathBasic, 'add');
            const figureCalculator = new FigureCalculator(MathBasic);

            const result = figureCalculator.calculateTrianglePerimeter(side1, side2, side3);

            expect(result).toEqual(48);
            expect(spyAdd).toHaveBeenNthCalledWith(2, side2, side3);
            expect(spyAdd).toHaveBeenNthCalledWith(3, side1, side2 + side3);
        });
    });

    describe('A calculateTriangleArea', () => {
        it('should throw error when not given 2 parameters', () => {
            const figureCalculator = new FigureCalculator({});

            expect(() => figureCalculator.calculateTriangleArea()).toThrowError();
            expect(() => figureCalculator.calculateTriangleArea(1)).toThrowError();
            expect(() => figureCalculator.calculateTriangleArea(1, 2, 3)).toThrowError();
        });
    });
});
