import * as React from 'react'
import * as ReactDOM from 'react-dom';

import { TodoList } from './TodoList';

// React.SFC interface takes a generic argument that allows
// you to easily provide the type annotations for the component props
type AppProps = { message: string };
const App: React.SFC<AppProps> = ({ message }) => {
    return (
        <div>
            {message}
            <TodoList />
        </div>);
}



ReactDOM.render(
    <App message={"Say Hi"} />,
    document.getElementById('root')
);