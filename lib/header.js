const Component = require('./component');
const { formatDate } = require('./date');

class Header extends Component {
    render() {
        return `<header class="header">
            <h1>Todo Today</h1>
            <p>${formatDate(new Date())}</p>
        </header>
        `
    }
}