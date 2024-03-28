"use server";

// SERVER ACTION
export const createPost = async formData => {
  const data = await fetch("https://posts-api-yj1i.onrender.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${process.env.POSTS_TOKEN}`,
    },
    body: JSON.stringify(formData),
  });
  return await data.json();
};
