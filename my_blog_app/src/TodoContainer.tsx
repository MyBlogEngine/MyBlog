import * as React from "react";
import { TodoItem } from "./TodoItem";
import *  as TodoComponent from "./Todo";
import { InputTextForm } from "./InputTextForm";


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
        if (text != "") {
            this.setState((prevState, _props) => {
                const newItem: TodoItem = new TodoItem(text);
                let newTodos = [...prevState.todos, newItem];
                return { todos: newTodos };
            });
        }
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
        console.log("render...");
        const TodoComponents = this.state.todos.map((todo: TodoItem, index: number) => {
            const props: TodoComponent.TodoProps = {
                todo: todo,
                index: index,
                callbacks: callbacks,
                mode: TodoComponent.TodoStateMode.Idle,
            };
            return < TodoComponent.Todo key={index} {...props} />
        });

        return (<div>
            {TodoComponents}
            <InputTextForm placeholder="New to do..." onSubmit={this.push} />
        </div >
        );
    }
}


