import { Post, AddPostForm } from "@components";

export default async function Posts() {
  const data = await fetch("https://posts-api-yj1i.onrender.com/posts", {
    cache: "no-store",
    headers: {
      "content-type": "application/json",
      apikey: process.env.POSTS_API_KEY,
    },
  });
  const { posts } = await data.json();

  console.log(posts.length);
  console.log("SERVER: ", process.env.POSTS_API_KEY);
  return (
    <main className="main">
      <AddPostForm />
      <div className="post-list">
        {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </main>
  );
}

//html = text => client
