import type { NextPage } from "next";
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
    <div className={styles.main}>
      <h1>Next JS Blog</h1>
      <div className={styles.grid}>
        {posts.map((post: PostType) => (
          <div key={post.id} className={styles.card}>
            <h2>{post.title}</h2>
            <p>{new Date(post.date).toLocaleDateString("fr-FR")}</p>
            <p>{post.content}</p>
            <div>
              <a href={post.slug}>Read more</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
