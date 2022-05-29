import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { PostType } from "../interface/type";
import styles from "../styles/Home.module.css";

export async function getStaticProps() {
  const res = await fetch("http://localhost:4000/posts");
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}

const Home: NextPage = ({ posts }: any) => {
  return (
    <div>
      {posts.map((post: PostType) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <div>
            <a href={post.slug}>Read more</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
