import { PostType } from "../interface/type";
import PostSlug from "../components/postSlug/index";

export async function getStaticPaths() {
  const res = await fetch("http://localhost:4000/posts");
  const posts = await res.json();
  const paths = posts.map((post: any) => ({
    params: { postSlug: post.slug },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

// This gets called on every request
export async function getStaticProps(context: any) {
  const postSlug = context.params?.postSlug;
  // Fetch data from external API
  const res = await fetch(`http://localhost:4000/posts/${postSlug}`);
  const postData = await res.json();
  // Pass data to the page via props
  return { props: postData };
}

const Post = (postData: any) => {
  return <PostSlug post={postData} />;
};

export default Post;
