import React from "react";
import { Post } from "@components";
import { posts } from "@static";

export default function Posts({
  params: { categorization = [] },
  searchParams = {},
}) {
  console.log(searchParams);
  let postsToDisplay = posts.filter(post =>
    categorization.every(el =>
      post.categorization.map(str => str.toLowerCase()).includes(el)
    )
  );
  if (searchParams?.tag) {
    postsToDisplay = postsToDisplay.filter(post =>
      post.tags
        .map(tag => tag.toLowerCase())
        .find(el => el.includes(searchParams.tag.toLowerCase()))
    );
  }
  return (
    <main className="main">
      {postsToDisplay.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </main>
  );
}
