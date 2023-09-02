const TaskListItem = require('../lib/taskListItem');

describe('TaskListItem', () => {
    describe('render', () => {
        test('should render li for task list item', () => {
            // arrange
            const taskName = 'Todo Item 1';
            const taskListItem = new TaskListItem([taskName]);
            const expectedHtml = `<li class="tasks-item">${taskName}</li>`;

            // act
            const renderHtml = taskListItem.render();

            // assert
            expect(renderHtml).toEqual(expectedHtml);
        });

        test('should render li with "tasks-item-priority" class when "isPriority" is "true"', () => {
            // arrange
            const taskName = 'Todo Item 1';
            const taskListItem = new TaskListItem([taskName], true);
            const expectedHtml = `<li class="tasks-item tasks-item-priority">${taskName}</li>`;

            // act
            const renderHtml = taskListItem.render();

            // assert
            expect(renderHtml).toEqual(expectedHtml);
        });
    });
});