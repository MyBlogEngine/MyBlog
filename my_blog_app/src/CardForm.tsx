import * as React from "react";

interface CardFormProps {
  head: string;
  submitButtonLabel: string;
  onSubmitButtonClick: () => void;
}

interface CardFormState {}

export class CardForm extends React.Component<CardFormProps, CardFormState> {
  constructor(props: CardFormProps) {
    super(props);
  }

  render() {
    return (
      <div className="card my-4">
        <h5 className="card-header">{this.props.head}</h5>
        <div className="card-body">
          <form>
            <div className="form-group">
              <textarea className="form-control" rows={3}></textarea>
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={_e => this.props.onSubmitButtonClick()}
            >
              {this.props.submitButtonLabel}
            </button>
          </form>
        </div>
      </div>
    );
  }
}
