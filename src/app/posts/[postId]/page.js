import React from "react";
import { posts } from "@static";
import Link from "next/link";

export default function PostTemplate({ params: { postId } }) {
  const post = posts.find(el => String(el.id) === postId);
  return (
    <main className="main">
      {!post ? (
        <h1>No post found</h1>
      ) : (
        <>
          <div className="post">
            <h1>{post.title}</h1>
            <h2>{post.content}</h2>
            <h5> - {post.createdBy}</h5>
          </div>
          <div>
            {post.comments.map(comment => (
              <Link
                key={comment.id}
                href={`/posts/${postId}/comments/${comment.id}`}
              >
                {comment.content} - {comment.createdBy}
              </Link>
            ))}
          </div>
        </>
      )}
    </main>
  );
}
