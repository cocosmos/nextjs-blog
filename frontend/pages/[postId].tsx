import {
  JSXElementConstructor,
  ReactElement,
  ReactFragment,
  ReactPortal,
  Suspense,
} from "react";
import { PostType } from "../interface/type";

export async function getStaticPaths() {
  const res = await fetch("http://localhost:4000/posts");
  const posts = await res.json();
  const paths = posts.map((post: any) => ({
    params: { postId: post.slug },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

// This gets called on every request
export async function getStaticProps(context: any) {
  const postSlug = context.params?.postId;
  // Fetch data from external API
  const res = await fetch(`http://localhost:4000/posts/${postSlug}`);
  const postData = await res.json();
  // Pass data to the page via props
  return { props: postData };
}

const Post = (postData: { post: PostType }) => {
  const date = new Date(postData.post.date);
  return (
    <div>
      <h1>{postData.post.title}</h1>
      <span>{date.getTime()}</span>

      <p>{postData.post.content}</p>
    </div>
  );
};

export default Post;
