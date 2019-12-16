import * as React from 'react';

// Model
export interface TodoItem {
    text: string;
    completed: boolean;
};


// View Component
//   -TodoListView
type TodoListViewProps = {
    todos: TodoItem[],
    onClick(index: number): void,
};
const TodoListView: React.SFC<TodoListViewProps> = ({ todos, onClick }) => (
    <ul>
        {todos.map((todo: TodoItem, index: number) =>
            <li><button onClick={(_e) => onClick(index)}>
                {todo.text} {todo.completed ? "completed" : "not completed"}</button></li>
        )}
    </ul>
)

// View Component
//   -AddTodoView
type AddTodoViewProps = {
    onClick(text: string): void,
}
const AddTodoView: React.SFC<AddTodoViewProps> = ({ onClick }) => (
    <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="new to-do" aria-label="new to-do" aria-describedby="button-addon2" />
        <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button" id="button-addon2"
                onClick={(_e) => onClick("Some text Added!")}>Add</button>
        </div>
    </div>
)

// View Component
//   -TodoListContentView
const TodoListContentView: React.SFC<React.PropsWithChildren<{}>> = ({ children }) => (
    <div className="container">
        {children}
    </div>
)

// Control Component
//   -TodoList
type TodoListState = {
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
            const newItem: TodoItem = {
                text: text,
                completed: false,
            }
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
            <AddTodoView onClick={this.addTodo} />
        </TodoListContentView>
        );
    }
}


