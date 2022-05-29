import React from "react";
import { PostType } from "../../interface/type";
import { Wrapper } from "./styled";
import Image from "next/image";

const PostSlug = (props: { post: PostType }) => {
  const date = new Date(props.post.date).toLocaleDateString("fr-FR");
  return (
    <Wrapper>
      <h1>{props.post.title}</h1>

      <h4>{date}</h4>
      <Image
        src="https://source.unsplash.com/random/500x300"
        alt="Image random"
        width={500}
        height={300}
      />

      <p>{props.post.content}</p>
    </Wrapper>
  );
};

export default PostSlug;
