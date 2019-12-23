import * as React from "react";
import * as ReactDOM from "react-dom";

import { TodoContainer } from "./TodoContainer";
import { PostContainer } from "./PostContainer";
import { CommentContainer } from "./CommentContainer";

// React.SFC interface takes a generic argument that allows
// you to easily provide the type annotations for the component props
const App: React.SFC<{}> = () => {
  const today: Date = new Date(Date.now());
  const dateString: string = today.toDateString();

  <TodoContainer />;

  return (
    <div className="container" onContextMenu={e => e.preventDefault()}>
      <h3>
        <u>{dateString}</u>
      </h3>
      <PostContainer>
        <CommentContainer></CommentContainer>
      </PostContainer>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
