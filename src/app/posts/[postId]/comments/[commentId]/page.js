import React from "react";
import { posts } from "@static";

export default function CommentTemplate({ params: { postId, commentId } }) {
  const comment = posts
    .find(el => String(el.id) === postId)
    ?.comments?.find(el => String(el.id) === commentId);
  return (
    <div>
      {!comment ? (
        <h1>No comment found</h1>
      ) : (
        <>
          <h1>{comment.content}</h1>
          <h2>- {comment.createdBy}</h2>
        </>
      )}
    </div>
  );
}
