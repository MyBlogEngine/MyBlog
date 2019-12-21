import * as React from "react";
import { Post } from "./Post";

interface PostCardViewProps {
  post: Post;
  index: number;
  expend?: boolean;
}

export class PostCardView extends React.Component<PostCardViewProps, {}> {
  constructor(props: PostCardViewProps) {
    super(props);
  }

  render() {
    const style = {
      width: "18rem"
    };

    let simpletext = "";
    const maxtext = 65;
    if (this.props.post.text.length > maxtext) {
      simpletext = this.props.post.text.substring(0, maxtext);
    } else {
      simpletext = this.props.post.text;
    }

    return (
      <div className="card mt-4" style={style}>
        <div className="card-body">
          <h5 className="card-title">{this.props.post.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            by {this.props.post.author}
          </h6>
          <p className="card-text">{simpletext}</p>
          <a href="#" className="card-link">
            More ...
          </a>
        </div>
      </div>
    );
  }
}
