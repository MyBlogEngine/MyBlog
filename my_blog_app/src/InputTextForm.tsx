import * as React from "react";


export interface InputTextFormProps {
    placeholder: string; // input : Content to be appear in the form control when the form control is empty
    initvalue: string;
    onSubmit(text: string): void;
};

interface InputTextState {
    value: string;
}

export class InputTextForm extends React.Component<InputTextFormProps, InputTextState> {
    constructor(props: InputTextFormProps) {
        super(props);
        this.state = {
            value: this.props.initvalue,
        }
    }

    onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ value: event.target.value });
    }

    // Handler for change event that fires when an alteration to the element's value is committed by the user.
    // Unlike the input event, the change event is not necessarily fired for each alteration to an element's value.
    // When the element loses focus after its value was changed, but not commited (e.g., after editing the value of input type="text")
    onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        const value = this.state.value;
        this.props.onSubmit(value);
        this.setState({ value: "" });
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input type="text" className="form-control"
                    value={this.state.value}
                    name="todo-text"
                    placeholder={this.props.placeholder}
                    onChange={this.onChange}
                />
            </form>
        )
    }
}