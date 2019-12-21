import * as React from "react";
import { Post } from "./Post";
//import { PostSmallView } from "./PostSmallView";
import { PostCardView } from "./PostCardView";

const samples: Post[] = [
  {
    title: "Title is important?",
    postingDate: new Date(Date.now()),
    lastModifiedDate: new Date(Date.now()),
    author: "Minjeong Kim",
    text: "wjdakf wjdakf wkadl dhk..."
  },
  {
    title: "I am so sleepy right now...",

    postingDate: new Date(Date.now() - 36000),
    lastModifiedDate: new Date(Date.now()),
    author: "Minjeong Kim",
    text:
      "wjdakf wjdakf wkadl dhk...\
    wjdakf wjdakf wkadl dhk...\
    wjdakf wjdakf wkadl dhk..."
  },
  {
    title: "Because I am very sleepy",
    postingDate: new Date(Date.now() - 72000),
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
    postingDate: new Date(Date.now() - 48000),
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
      return <PostCardView key={index} post={post} index={index} />;
    });

    return (
      <div className="container">
        <div className="col">{posts}</div>
      </div>
    );
  }
}
