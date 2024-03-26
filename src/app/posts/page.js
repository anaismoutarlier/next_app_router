import React from "react";
import { Post } from "@components";
import { posts } from "@static";

export default function Posts() {
  return (
    <main className="main">
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </main>
  );
}
