import { useParams, Link } from "react-router-dom";
import styles from "./BlogPost.module.css";
import blogPosts from "./blogData";

export default function BlogPost() {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === parseInt(id));

  if (!post) {
    return <h2 style={{ textAlign: "center" }}>Post not found!</h2>;
  }

  return (
    <article className={styles.postContainer}>
      <img src={post.image} alt={post.title} className={styles.image} />
      <h1 className={styles.title}>{post.title}</h1>
      <div className={styles.meta}>
        <span>👨‍🍳 {post.author}</span> • <span>📅 {post.date}</span>
      </div>

      {/* render HTML content */}
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      <Link to="/blog" className={styles.backLink}>
        ← Back to Blog
      </Link>
    </article>
  );
}
