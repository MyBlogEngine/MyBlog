import * as React from 'react';

// Model
export interface TodoItem {
    text: string;
    completed: boolean;
};


type TodoListViewProps = {
    todos: TodoItem[],
    onClick(index: number): void,
};

// View Component
const TodoListView: React.SFC<TodoListViewProps> = ({ todos, onClick }) => (
    <ul>
        {todos.map((todo: TodoItem, index: number) =>
            <li><button onClick={(_e) => onClick(index)}>
                {todo.text} {todo.completed ? "completed" : "not completed"}</button></li>
        )}
    </ul>
)

const SampleTodos: TodoItem[] = [
    {
        text: "This is",
        completed: false,
    },
    {
        text: "Very Simple",
        completed: false,
    },
    {
        text: "Test Data",
        completed: false,
    },
    {
        text: "In the Container",
        completed: false,
    },
    {
        text: "Hahaha!",
        completed: false,
    },
];


type TodoListState = {
    todos: TodoItem[]
};
// Control Component
export class TodoList extends React.Component<{}, TodoListState>
{
    constructor(props: Readonly<{}>) {
        super(props);
        this.state = {
            todos: SampleTodos,
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
        return <TodoListView todos={this.state.todos} onClick={this.handleClick} />;
    }
}


