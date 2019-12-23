import * as React from "react";

interface TextAreaFormProps {
  head: string;
  submitButtonLabel: string;
  onSubmit: (text: string) => void;
}

interface TextAreaFormtate {
  value: string;
}

export class TextAreaForm extends React.Component<
  TextAreaFormProps,
  TextAreaFormtate
> {
  constructor(props: TextAreaFormProps) {
    super(props);
    this.state = {
      value: ""
    };
  }

  onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <div className="card my-4">
        <h5 className="card-header">{this.props.head}</h5>
        <div className="card-body">
          <form
            onSubmit={_e => {
              // Todo(minjeong): replace preventDefault with something to handle backend
              _e.preventDefault();
              this.props.onSubmit(this.state.value);
              this.setState({ value: "" });
            }}
          >
            <div className="form-group">
              <textarea
                name="textarea"
                className="form-control"
                rows={3}
                value={this.state.value}
                onChange={this.onChange}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              {this.props.submitButtonLabel}
            </button>
          </form>
        </div>
      </div>
    );
  }
}
