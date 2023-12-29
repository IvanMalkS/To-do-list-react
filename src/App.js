import { Component } from "react";
import TodoList from './TodoList'

const date1 = new Date(2023, 12, 27, 14, 5);
const date2 = new Date(2024, 1, 27, 14, 5);

const initialData = [
    {
        title: "Создать первый проект",
        desc: "Гойда!",
        image: '',
        done: true,
        createdAt: date1.getTime()
    },
    {
        title: "Написать первый проект",
        desc: "ПИЗДЕЦ",
        image: '',
        done: false,
        createdAt: date2.getTime()
    }
];

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {data:initialData};
        this.setDone = this.setDone.bind(this);
    }

    setDone(key) {
        const deed = this.state.data.find((current) => current.key === key);
        if (deed)
            deed.done = true;
        this.setState((state) => ({}))
    }

    render() {
        return (
            <div>
                <nav className="navbar is-light">
                    <div className="navbar-brand">
                        <span className="navbar-item is-uppercase">
                            Todos
                        </span>
                    </div>
                </nav>
                <main className="content px-6 mt-6">
                    <TodoList list={this.data} setDone={this.setDone}/>
                </main>
            </div>
        );
    }
}

