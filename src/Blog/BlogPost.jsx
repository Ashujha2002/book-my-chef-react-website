// src/Blog/BlogPost.jsx
import { useParams, Link } from "react-router-dom";
import styles from "./BlogPost.module.css";

// Dummy blog data (same as in Blog.jsx)
const blogPosts = [
  {
    id: 1,
    title: "Healthy Cooking with Fresh Ingredients",
    content: `Cooking with fresh ingredients is not only healthy but also makes food taste better.
    Fresh vegetables, herbs, and organic products are rich in nutrients and free from harmful chemicals.
    In this article, we will guide you on how to use fresh ingredients in your daily cooking...`,
    image:
      "https://th.bing.com/th/id/OIP.TguP8o6yUuYebHodW7fOtgHaE7?w=1200&h=800&rs=1&pid=ImgDetMain",
    author: "Chef Arjun",
    date: "Jan 15, 2025",
  },
  {
    id: 2,
    title: "Top 10 Easy Dinner Recipes",
    content: `After a long day, cooking dinner can feel tiring. That’s why easy recipes are a blessing.
    We’ve put together 10 delicious dinner recipes that you can prepare in less than 30 minutes...`,
    image:
      "https://th.bing.com/th/id/OIP.lMxykQOXFwV4r8yM4s7ckwHaE8?rs=1&pid=ImgDetMain",
    author: "Chef Meera",
    date: "Feb 02, 2025",
  },
  {
    id: 3,
    title: "5 Secrets of Professional Chefs",
    content: `Chefs have years of training and practice, but there are a few simple tricks they use daily.
    From seasoning techniques to plating styles, these 5 secrets can make your home cooking shine...`,
    image:
      "https://th.bing.com/th/id/OIP.9L30RZhF7tCvo3m-PzSp4wHaE8?rs=1&pid=ImgDetMain",
    author: "Chef Ravi",
    date: "Feb 10, 2025",
  },
];

export default function BlogPost() {
  const { id } = useParams(); // get blog id from URL
  const post = blogPosts.find((p) => p.id === parseInt(id));

  if (!post) {
    return <h2 style={{ textAlign: "center" }}>Post not found!</h2>;
  }

  return (
    <div className={styles.postContainer}>
      <img src={post.image} alt={post.title} className={styles.image} />
      <h1 className={styles.title}>{post.title}</h1>
      <div className={styles.meta}>
        <span>{post.author}</span> • <span>{post.date}</span>
      </div>
      <p className={styles.content}>{post.content}</p>
      <Link to="/blog" className={styles.backLink}>
        ← Back to Blog
      </Link>
    </div>
  );
}
