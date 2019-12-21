import * as React from "react";
import { Post } from "./Post";
import { CardForm } from "./CardForm";

interface PostSmallProps {
  post: Post;
  index: number;
  expend: boolean;
}

export class PostSmallView extends React.Component<PostSmallProps, {}> {
  constructor(props: PostSmallProps) {
    super(props);
  }

  render() {
    return (
      <div className="col-lg-8 border border-dark mt-4">
        <h3 className="mt-4">{this.props.post.title}</h3>
        <p className="lead">
          by <a href="#">{this.props.post.author}</a>
        </p>
        <hr />
        <p>Posted on {this.props.post.postingDate?.toDateString()}</p>
        <hr />
        <p className="lead">{this.props.post.text}</p>
        <hr />
        <CardForm
          head="Leave a Comment:"
          submitButtonLabel="Submit"
          onSubmitButtonClick={() => {
            console.log("submit button clicked");
          }}
        />
      </div>
    );
  }
}
