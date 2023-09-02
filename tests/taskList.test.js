const TaskList = require('../lib/taskList');
const TaskListItem = require('../lib/taskListItem');

describe('TaskList', () => {
    describe('render', () => {
        test('should render ul with tasks', () => {
            // arrange
            const taskName1 = 'Todo Item 1';
            const taskName2 = 'Todo Item 2';

            const taskItems = [new TaskListItem([taskName1]), new TaskListItem([taskName2], true)];
            const taskList = new TaskList(taskItems);
            const expectedHtml = [
                '<ul class="tasks">',
                `<li class="tasks-item">${taskName1}</li>`,
                `<li class="tasks-item tasks-item-priority">${taskName2}</li>`,
                '</ul>'
            ].join('');

            // act
            const renderHtml = taskList.render();

            // assert
            expect(renderHtml).toEqual(expectedHtml);
        });
    });
});