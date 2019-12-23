import * as React from "react";
import { Post } from "./Post";
import { PostSmallView } from "./PostSmallView";

const samples: Post[] = [
  {
    title: "Title is important?",
    postedDate: new Date(Date.now()),
    lastModifiedDate: new Date(Date.now()),
    author: "Minjeong Kim",
    text: "wjdakf wjdakf wkadl dhk..."
  },
  {
    title: "I am so sleepy right now...",

    postedDate: new Date(Date.now() - 36000),
    lastModifiedDate: new Date(Date.now()),
    author: "Minjeong Kim",
    text:
      "wjdakf wjdakf wkadl dhk...\
    wjdakf wjdakf wkadl dhk...\
    wjdakf wjdakf wkadl dhk..."
  },
  {
    title: "Because I am very sleepy",
    postedDate: new Date(Date.now() - 72000),
    lastModifiedDate: new Date(Date.now()),
    author: "Minjeong Kim",
    text:
      "wjdakf wjdakf wkadl dhk...\
    wjdakf wjdakf wkadl dhk...\
    wjdakf wjdakf wkadl dhk...\
    wjdakf wjdakf wkadl dhk..."
  },
  {
    title: "Title is important?",
    postedDate: new Date(Date.now() - 48000),
    lastModifiedDate: new Date(Date.now()),
    author: "Minjeong Kim",
    text:
      "wjdakf wjdakf wkadl dhk...\
    wjdakf wjdakf wkadl dhk...\
    wjdakf wjdakf wkadl dhk...\
    wjdakf wjdakf wkadl dhk...\
    wjdakf wjdakf wkadl dhk..."
  }
];

interface PostContainerProps {}

interface PostContainerState {
  posts: Post[];
}

export class PostContainer extends React.Component<
  PostContainerProps,
  PostContainerState
> {
  constructor(props: PostContainerProps) {
    super(props);
    this.state = {
      posts: samples
    };
  }

  render() {
    const posts = this.state.posts.map((post, index) => {
      return (
        <PostSmallView key={index} post={post} index={index}></PostSmallView>
      );
    });

    return (
      <div className="container">
        <div className="col">
          {posts}
          {this.props.children}
        </div>
      </div>
    );
  }
}
