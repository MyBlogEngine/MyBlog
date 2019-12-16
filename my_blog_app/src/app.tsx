import * as React from 'react'
import * as ReactDOM from 'react-dom';

import { TodoList } from './TodoList';
import { DateView } from './DateView';

// React.SFC interface takes a generic argument that allows
// you to easily provide the type annotations for the component props
const App: React.SFC<{}> = () => {
    const today: Date = new Date(Date.now());
    const dateString: string = today.toDateString();

    return (
        <div className="container">
            <DateView dateString={dateString} />
            <TodoList />
        </div>);
}



ReactDOM.render(
    <App />,
    document.getElementById('root')
);