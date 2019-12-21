import * as React from "react";
import { TodoItem } from "./TodoItem";
import { InputTextForm } from "./InputTextForm";
import { Button } from "./Button";

export enum TodoStateMode {
  Idle,
  EditingText
}

export interface TodoCallbacks {
  removeAt(index: number): void;
  updateAt(index: number, updated: TodoItem): void;
  editAt(index: number): void;
}

export interface TodoProps {
  todo: TodoItem;
  index: number;
  callbacks: TodoCallbacks;
  mode: TodoStateMode;
}

export class Todo extends React.Component<TodoProps, {}> {
  constructor(props: TodoProps) {
    super(props);
  }

  updateText = (text: string) => {
    let update = { ...this.props.todo };
    update.text = text;
    this.props.callbacks.updateAt(this.props.index, update);
  };

  remove = () => {
    this.props.callbacks.removeAt(this.props.index);
  };

  toggle = () => {
    let update = { ...this.props.todo };
    update.completed = !update.completed;
    this.props.callbacks.updateAt(this.props.index, update);
  };

  onClick = (event: React.MouseEvent<HTMLParagraphElement>) => {
    /*
        0: Main button pressed, usually the left button or the un-initialized state
        2: Secondary button pressed, usually the right button
        */
    if (event.button == 0) {
      this.toggle();
    } else if (event.button == 2) {
      this.props.callbacks.editAt(this.props.index);
    }
  };

  render() {
    if (this.props.mode == TodoStateMode.Idle) {
      return (
        <p onClick={this.onClick} onContextMenu={this.onClick}>
          {this.props.todo.completed ? (
            <del>{this.props.todo.text}</del>
          ) : (
            this.props.todo.text
          )}
        </p>
      );
    } else if (this.props.mode == TodoStateMode.EditingText) {
      return (
        <InputTextForm
          initvalue={this.props.todo.text}
          onSubmit={this.updateText}
          onBlur={this.updateText}
        >
          <Button onClick={() => this.remove()} label="Delete" />
        </InputTextForm>
      );
    }

    return {};
  }
}
