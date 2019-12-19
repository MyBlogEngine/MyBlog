import * as React from "react";
import { TodoItem } from "./TodoItem";
import { TodoCallbacks } from "./TodoContainer";
import { InputTextForm } from "./InputTextForm";

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
        if (text == "") {
            this.remove();
        } else {
            let updated = this.state.todo;
            updated.text = text;
            this.setState({ todo: updated, mode: TodoStateMode.Idle }, this.notify);
        }
    }

    onClick = (event: React.MouseEvent<HTMLParagraphElement>) => {
        /*
        0: Main button pressed, usually the left button or the un-initialized state
        1: Auxiliary button pressed, usually the wheel button or the middle button (if present)
        2: Secondary button pressed, usually the right button
        3: Fourth button, typically the Browser Back button
        4: Fifth button, typically the Browser Forward button
        */
        console.log(event.button);
        if (event.button == 0) {
            this.toggle();
        } else if (event.button == 2) {
            this.setState({ mode: TodoStateMode.EditingText });
        }
    }

    render() {
        if (this.state.mode == TodoStateMode.Idle) {
            return <p onClick={this.onClick} onContextMenu={this.onClick}>
                {this.state.todo.completed ? <del>{this.state.todo.text}</del> : this.state.todo.text}
            </p>
        } else if (this.state.mode == TodoStateMode.EditingText) {
            return <InputTextForm placeholder={this.state.todo.text} initvalue={this.state.todo.text}
                onSubmit={this.updateText} />;
        }

        return {}
    }
}