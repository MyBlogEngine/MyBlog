import * as React from "react";
import { Comment } from "./Comment";

interface CommentViewProps {
  comment: Comment;
}

export const CommentView: React.SFC<CommentViewProps> = props => {
  return (
    <div className="mb-4 border">
      <div>
        <div>
          <h5 className="mt-0">{props.comment.author}</h5>
          <span>
            <p>
              on {props.comment.postedDate.toLocaleDateString()}{" "}
              {props.comment.postedDate.toLocaleTimeString()}
            </p>
          </span>
        </div>
        {props.comment.text}
      </div>
    </div>
  );
};
