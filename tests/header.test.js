const Header = require('../lib/header');
const { formatDate } = require('../lib/date');

describe('Header', () => {
    describe('render', () => {
        test('should render header with the date', () => {
            // arrange
            const header = new Header();
            const expectedHtml = [
                '<header class="header">',
                '<h1>Todo Today</h1>',
                `<p>${formatDate(new Date())}</p>`,
                '</header>'
            ].join('');

            // act
            const resultHtml = header.render();

            // assert
            expect(resultHtml).toEqual(expectedHtml);
        });
    });
});