import * as React from "react";
import { TodoItem } from "./TodoItem";
import *  as TodoComponent from "./Todo";
import { InputTextForm } from "./InputTextForm";
import { Button } from "./Button";


interface TodoContainerState {
    todos: TodoItem[];
    editingIdx: number,
};

export class TodoContainer extends React.Component<{}, TodoContainerState>
{
    constructor(props: Readonly<{}>) {
        super(props);
        this.state = {
            todos: [],
            editingIdx: -1,
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
            return { todos, editingIdx: -1 };
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
            return { todos, editingIdx: -1 };
        })
    }

    editAt = (index: number) => {
        this.setState({ editingIdx: index });
    }

    flush = () => {
        this.setState({ todos: [], editingIdx: -1 });
    }

    render() {

        const callbacks: TodoComponent.TodoCallbacks = this;
        const TodoComponents = this.state.todos.map((todo: TodoItem, index: number) => {
            const props: TodoComponent.TodoProps = {
                todo: todo,
                index: index,
                callbacks: callbacks,
                mode: TodoComponent.TodoStateMode.Idle,
            };

            if (this.state.editingIdx == index) {
                props.mode = TodoComponent.TodoStateMode.EditingText;
            }

            return < TodoComponent.Todo key={index} {...props} />
        });

        return (<div>
            {TodoComponents}
            <InputTextForm placeholder="New to do..." initvalue="" onSubmit={this.push} />
            <Button label="Flush" onClick={this.flush} />
        </div >
        );
    }
}


