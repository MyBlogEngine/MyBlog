import * as React from "react";
import { TodoItem } from "./TodoItem";
import { TodoCallbacks } from "./TodoContainer";

export enum TodoStateMode { Idle, EditingText };

export interface TodoProps {
    todo: TodoItem;
    index: number;
    callbacks: TodoCallbacks;
    mode: TodoStateMode;
};

interface TodoState {
    todo: TodoItem;
    mode: TodoStateMode;
}

export class Todo extends React.Component<TodoProps, TodoState> {
    constructor(props: TodoProps) {
        super(props);
        this.state = {
            todo: props.todo,
            mode: props.mode,
        };
    }

    notify = () => {
        this.props.callbacks.updateAt(this.props.index, this.state.todo);
    }

    remove = () => {
        this.props.callbacks.removeAt(this.props.index);
    }

    toggle = () => {
        let updated = this.state.todo;
        updated.completed = !updated.completed;
        this.setState({ todo: updated }, this.notify);
    }

    updateText = (text: string) => {
        let updated = this.state.todo;
        updated.text = text;
        this.setState({ todo: updated }, this.notify);
    }

    render() {
        return (<p>{this.state.todo.text}</p>)
    }
}