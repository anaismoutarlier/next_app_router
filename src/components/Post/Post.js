import Link from "next/link";
import { formatDate } from "@utils";

const Post = ({ post }) => {
  return (
    <Link href={`/posts/${post.id}`}>
      <div className="post">
        <h4>{post.title}</h4>
        <p>
          {post.content} -{" "}
          <span>
            {post.createdBy}, {formatDate(post.createdAt)}
          </span>
        </p>
      </div>
    </Link>
  );
};

export { Post };
