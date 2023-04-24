const MathBasic = require("./MathBasic");
const createServer = require("./createServer");
const FigureCalculator = require("./FigureCalculator");
describe('A HTTP Server', () => {
    describe('when GET /add', () => {
        it('should respond with a status code of 200 and the payload value is addition result of a and b correctly', async () => {
            // Arrange
            const a = 10;
            const b = 20;
            const spyAdd = jest.spyOn(MathBasic, 'add');
            const server = createServer({ mathBasic: MathBasic });

            // Action
            const response = await server.inject({
                method: 'GET',
                url: `/add/${a}/${b}`,
            });

            // Assert
            const responseJson = JSON.parse(response.payload);
            expect(response.statusCode).toEqual(200);
            expect(responseJson.value).toEqual(30);
            expect(spyAdd).toBeCalledWith(a, b);
        });
    });

    describe('when GET /subtract', () => {
        it('should respond with a status code of 200 and the payload value is subtraction result of a and b correctly', async () => {
            const a = 12;
            const b = 8;
            const spySubtract = jest.spyOn(MathBasic, 'subtract');
            const server = createServer({ mathBasic: MathBasic });

            const response = await server.inject({
                method: 'GET',
                url: `/subtract/${a}/${b}`,
            });

            const responseJson = JSON.parse(response.payload);
            expect(response.statusCode).toEqual(200);
            expect(responseJson.value).toEqual(4);
            expect(spySubtract).toBeCalledWith(a, b);
        });
    });

    describe('when GET /multiply', () => {
        it('should respond with a status code of 200 and the payload value is multiply result of a and b correctly', async () => {
            const a = 20;
            const b = 15;
            const spyMultiply = jest.spyOn(MathBasic, 'multiply');
            const server = createServer({ mathBasic: MathBasic });

            const response = await server.inject({
                method: 'GET',
                url: `/multiply/${a}/${b}`,
            });

            const responseJson = JSON.parse(response.payload);
            expect(response.statusCode).toEqual(200);
            expect(responseJson.value).toEqual(300);
            expect(spyMultiply).toBeCalledWith(a, b);
        });
    });

    describe('when GET /divide', () => {
        it('should respond with a status code of 200 and the payload value is divide result of a and b correctly', async () => {
            const a = 15;
            const b = 3;
            const spyDivide = jest.spyOn(MathBasic, 'divide');
            const server = createServer({ mathBasic: MathBasic });

            const response = await server.inject({
                method: 'GET',
                url: `/divide/${a}/${b}`,
            });

            const responseJson = JSON.parse(response.payload);
            expect(response.statusCode).toEqual(200);
            expect(responseJson.value).toEqual(5);
            expect(spyDivide).toBeCalledWith(a, b);
        });
    });

    describe('when GET /rectangle/perimeter', () => {
        it('should respond with a status code of 200 and the payload value is rectangle perimeter result of a and b correctly', async () => {
            const a = 20;
            const b = 10;
            const spyAdd = jest.spyOn(MathBasic, 'add');
            const spyMultiple = jest.spyOn(MathBasic, 'multiply');
            const figureCalculator =  new FigureCalculator(MathBasic);
            const server = createServer({ mathBasic: MathBasic, figureCalculator });

            const response = await server.inject({
                method: 'GET',
                url: `/rectangle/perimeter/${a}/${b}`,
            });

            const responseJson = JSON.parse(response.payload);
            expect(response.statusCode).toEqual(200);
            expect(responseJson.value).toEqual(60);
            expect(spyAdd).toBeCalledWith(a, b);
            expect(spyMultiple).toBeCalledWith(2, 30);
        });
    });

    describe('when GET /rectangle/area', () => {
        it('should respond with a status code of 200 and the payload value is rectangle area result of a and b correctly', async () => {
            const a = 20;
            const b = 10;
            const spyMultiple = jest.spyOn(MathBasic, 'multiply');
            const figureCalculator =  new FigureCalculator(MathBasic);
            const server = createServer({ mathBasic: MathBasic, figureCalculator });

            const response = await server.inject({
                method: 'GET',
                url: `/rectangle/area/${a}/${b}`,
            });

            const responseJson = JSON.parse(response.payload);
            expect(response.statusCode).toEqual(200);
            expect(responseJson.value).toEqual(200);
            expect(spyMultiple).toBeCalledWith(a, b);
        });
    });

    describe('when GET /triangle/perimeter', () => {
        it('should respond with a status code of 200 and the payload value is triangle perimeter result of a, b, c correctly', async () => {
            const a = 12;
            const b = 12;
            const c = 24;
            const spyAdd = jest.spyOn(MathBasic, 'add');
            const figureCalculator =  new FigureCalculator(MathBasic);
            const server = createServer({ mathBasic: MathBasic, figureCalculator });

            const response = await server.inject({
                method: 'GET',
                url: `/triangle/perimeter/${a}/${b}/${c}`,
            });

            const responseJson = JSON.parse(response.payload);
            expect(response.statusCode).toEqual(200);
            expect(responseJson.value).toEqual(48);
            expect(spyAdd).toBeCalledWith(12, 36);
        });
    });

    describe('when GET /triangle/area', () => {
        it('should respond with a status code of 200 and the payload value is triangle area result of a, b correctly', async () => {
            const a = 15;
            const b = 16;
            const spyMultiple = jest.spyOn(MathBasic, 'multiply');
            const spyDivide = jest.spyOn(MathBasic, 'divide');
            const figureCalculator =  new FigureCalculator(MathBasic);
            const server = createServer({ mathBasic: MathBasic, figureCalculator });

            const response = await server.inject({
                method: 'GET',
                url: `/triangle/area/${a}/${b}`,
            });

            const responseJson = JSON.parse(response.payload);
            expect(response.statusCode).toEqual(200);
            expect(responseJson.value).toEqual(120);
            expect(spyMultiple).toBeCalledWith(15, 16);
            expect(spyDivide).toBeCalledWith(240, 2);
        });
    });

})
