import * as React from "react";
import { TodoItem } from "./TodoItem";
import { Todo } from "./Todo";



interface TodoContainerState {
    todos: TodoItem[]
};

export interface TodoCallbacks {
    push(text: string): void;
    removeAt(index: number): void;
    swap(indexA: number, indexB: number): void;
    updateAt(index: number, updated: TodoItem): void;
};

export class TodoContainer extends React.Component<{}, TodoContainerState>
{
    constructor(props: Readonly<{}>) {
        super(props);
        this.state = {
            todos: [],
        };
    }

    push = (text: string) => {
        this.setState((prevState, _props) => {
            const newItem: TodoItem = new TodoItem(text);
            let newTodos = [...prevState.todos, newItem];
            return { todos: newTodos };
        });
    }

    removeAt = (index: number) => {
        this.setState((prevState, _props) => {
            let todos = [...prevState.todos];
            todos.splice(index, 1);
            return { todos };
        });
    }

    swap = (indexA: number, indexB: number) => {
        this.setState((prevState, _props) => {
            let todos = [...prevState.todos];
            let temp: TodoItem = todos[indexA];
            todos[indexA] = todos[indexB];
            todos[indexB] = temp;
            return { todos };
        });
    }

    updateAt = (index: number, updated: TodoItem) => {
        this.setState((prevState, _props) => {
            let todos = [...prevState.todos];
            todos[index] = updated;
            return { todos };
        })
    }


    render() {

        const callbacks: TodoCallbacks = this;

        const TodoComponents = this.state.todos.map((todo: TodoItem, index: number) => {
            <Todo key={index} todo={todo} index={index} callbacks={callbacks} />
        });

        return (<div>
            {TodoComponents}
        </div>
        );
    }
}


