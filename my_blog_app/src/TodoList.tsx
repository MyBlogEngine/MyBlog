import * as React from 'react';

// Model
class TodoItem {
    constructor(public text: string = "", public completed: boolean = false) {

    }
};


// View Component
//   -TodoListView
interface TodoListViewProps {
    todos: TodoItem[],
    onClick(index: number): void,
};
const TodoListView: React.SFC<TodoListViewProps> = ({ todos, onClick }) => (
    <div className="d-flex flex-column">
        {todos.map((todo: TodoItem, index: number) =>
            <div key={index}>
                <span onClick={(_e) => { onClick(index) }}>
                    {todo.completed ? <p><del>{todo.text}</del></p> : <p>{todo.text}</p>}
                </span>
            </div>
        )}
    </div>
)

// View Component
//   -AddTodoView
interface NewTodoViewProps {
    onClick(text: string): void,
}
interface NewTodoViewState {
    value: string,
}
class NewTodoView extends React.Component<NewTodoViewProps, NewTodoViewState> {
    constructor(props: NewTodoViewProps, public placeholder: string) {
        super(props);
        this.placeholder = "new to-do";
        this.state = {
            value: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
        if (event.key == 'Enter' && this.state.value != "") {
            event.preventDefault();
            this.props.onClick(this.state.value);
            this.setState({ value: "" });
        }
    }
    handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ value: event.target.value });
    }

    handleClick(_e: React.MouseEvent<HTMLButtonElement>) {
        this.props.onClick(this.state.value);
        this.setState({ value: "" });
    }

    render() {
        return (<div className="input-group mb-3">
            <input type="text" className="form-control"
                value={this.state.value}
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
                placeholder={this.placeholder} aria-label="new to-do" aria-describedby="button-addon2" />
            <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button" id="button-addon2"
                    onClick={this.handleClick}>Add</button>
            </div>
        </div>)
    }
}

// View Component
//   -TodoListContentView
const TodoListContentView: React.SFC<React.PropsWithChildren<{}>> = ({ children }) => (
    <div className="container">
        {children}
    </div>
)

// Control Component
//   -TodoList
interface TodoListState {
    todos: TodoItem[]
};
export class TodoList extends React.Component<{}, TodoListState>
{
    constructor(props: Readonly<{}>) {
        super(props);
        this.state = {
            todos: [],
        };

        this.handleClick = this.handleClick.bind(this);
        this.addTodo = this.addTodo.bind(this);
    }

    addTodo(text: string) {
        this.setState((prevState, _props) => {
            const newItem: TodoItem = new TodoItem(text);
            let newTodos = [...prevState.todos, newItem];
            return { todos: newTodos };
        });
    }

    handleClick(index: number) {
        this.setState((prevState, _props) => {
            let todos = [...prevState.todos];
            todos[index].completed = !todos[index].completed;
            return { todos };
        });
    }

    render() {
        return (<TodoListContentView>
            <TodoListView todos={this.state.todos} onClick={this.handleClick} />
            <NewTodoView onClick={this.addTodo} />
        </TodoListContentView>
        );
    }
}


