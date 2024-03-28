import { Post, AddPostForm } from "@components";

const getPosts = async () => {
  const data = await fetch("https://posts-api-yj1i.onrender.com/posts", {
    cache: "no-store",
    headers: {
      "content-type": "application/json",
      apikey: process.env.POSTS_API_KEY,
    },
  });
  return await data.json();
};

export default async function Posts() {
  const { posts } = await getPosts();

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
