import * as React from "react";

const days: string[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

interface DatePickerProps {}

interface DatePickerState {
  count: number;
}

export class DatePicker extends React.Component<
  DatePickerProps,
  DatePickerState
> {
  constructor(props: Readonly<{}>) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    const rows: JSX.Element[] = [];

    let dayNumbers: JSX.Element[] = [];
    for (let i = 1; i <= 31; i++) {
      dayNumbers.push(<td>{i}</td>);
      if (i % 7 == 0) {
        rows.push(<tr>{dayNumbers}</tr>);
        dayNumbers = [];
      }
    }
    if (dayNumbers.length > 0) {
      rows.push(<tr>{dayNumbers}</tr>);
    }

    return (
      <div>
        <table className="table table-bordered">
          <thead className="table-light">
            <tr>
              {days.map(day => (
                <th key={day}>{day}</th>
              ))}
            </tr>
          </thead>
          <tbody className="table-dark">{rows}</tbody>
        </table>
      </div>
    );
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };
}
