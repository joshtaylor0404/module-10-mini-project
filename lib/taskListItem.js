const Component = require('./component');

class TaskListItem extends Component {
    constructor(children, priority = false) {
        super(children);
        this.priority = priority;
    }

    render() {
        const classNames = ['tasks-item'];

        if (this.priority) {
            classNames.push('tasks-item-priority');
        }

        // ['1','2'] => '1 2'
        return `<li class="${classNames.join(' ')}">${this.renderInnerHtml()}</li>`;
    }
}

module.exports = TaskListItem;