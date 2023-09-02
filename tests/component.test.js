const Component = require('../lib/component');

describe('Component', () => {
    describe('render', () => {
        test('should throw error if render() is called', () => {
            // arrange
            const component = new Component();

            // act
            const err = new Error('Child class must implement render() method.');

            // assert
            expect(component.render).toThrowError(err);
        })
    })
})