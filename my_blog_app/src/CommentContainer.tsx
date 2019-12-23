import * as React from "react";
import { TextAreaForm } from "./TextAreaForm";
import { Comment } from "./Comment";
import { CommentView } from "./CommentView";

interface CommentFormProps {
  onSubmit: (text: string) => void;
}
const CommentForm: React.SFC<CommentFormProps> = props => (
  <TextAreaForm
    head="Leave a Comment:"
    submitButtonLabel="Submit"
    onSubmit={props.onSubmit}
  />
);

interface CommentContainerProps {}
interface CommentContainerState {
  comments: Comment[];
}

const smaples: Comment[] = [
  {
    author: "Minjeong Kim",
    postedDate: new Date(Date.now()),
    text: "This is comment1..."
  },
  {
    author: "Minjeong Kim",
    postedDate: new Date(Date.now()),
    text: "This is comment2..."
  },
  {
    author: "Minjeong Kim",
    postedDate: new Date(Date.now()),
    text: "This is comment3..."
  },
  {
    author: "Minjeong Kim",
    postedDate: new Date(Date.now()),
    text: "This is comment4..."
  }
];

export class CommentContainer extends React.Component<
  CommentContainerProps,
  CommentContainerState
> {
  constructor(props: CommentContainerProps) {
    super(props);
    this.state = {
      comments: smaples
    };
  }

  addComment = (text: string) => {
    this.setState(prevState => {
      const newComment: Comment = {
        text: text,
        author: "Temp Author",
        postedDate: new Date(Date.now())
      };
      let comments = [newComment, ...prevState.comments];
      return { comments: comments };
    });
  };

  render() {
    return (
      <div>
        <CommentForm onSubmit={this.addComment}></CommentForm>
        {this.state.comments.map(comment => (
          <CommentView comment={comment} />
        ))}
      </div>
    );
  }
}
