// src/Blog/Blog.jsx
import { Link } from "react-router-dom";
import styles from "./Blog.module.css";
import Hero from "../ServicePage/Hero/Hero";
import heroImg from "../assets/dinner.jpg";
import image1 from "../assets/PR2.jpeg";
import imag2 from "../assets/10.png";
import imag3 from "../assets/dinner.jpg";

const blogPosts = [
  {
    id: 1,
    title: "Top Benefits of Hiring a Private Chef for Your Events in India",
    excerpt:
      "Organizing an event, whether it’s a wedding, birthday party, corporate gathering, or intimate dinner, can be a stressful affair.",
    image: image1,
    author: "Mitwa Dadkan",
    date: { day: "26", month: "Oct", year: "2016" },
  },
  {
    id: 2,
    title: "How to Choose the Perfect Chef for Your Indian Event",
    excerpt:
      "When planning an event in India, whether it’s a wedding, birthday party, corporate gathering, or festive celebration, ",
    image: imag2,
    author: "Mahvus Georgia",
    date: { day: "26", month: "Oct", year: "2016" },
  },
  {
    id: 3,
    title: "Top 10 Benefits of Hiring a Private Chef for Your Indian Events",
    excerpt:
      "When planning an event in India, food is not just a necessity—it is the centerpiece that defines the entire experience.",
    image: imag3,
    author: "Alex Hales",
    date: { day: "29", month: "Feb", year: "2018" },
  },
];

export default function Blog() {
  return (
    <>
      <Hero Heading="Blogs" imageUrl={heroImg} AboveHead="Our Blogs" />
      <section className={styles.blogSection}>
        <div className={styles.container}>
          <h2 className={styles.heading}>
            Nice Workplace For Brainstorming Meetings
          </h2>
          <p className={styles.subHeading}>
            It’s no secret that the digital industry is booming. From exciting
            startups to global brands, companies are reaching out to digital
            agencies.
          </p>

          <div className={styles.grid}>
            {blogPosts.map((post) => (
              <div className={styles.card} key={post.id}>
                <div className={styles.imageWrapper}>
                  <img
                    src={post.image}
                    alt={post.title}
                    className={styles.image}
                  />
                  <div className={styles.dateBox}>
                    <span className={styles.day}>{post.date.day}</span>
                    <span className={styles.month}>{post.date.month}</span>
                    <span className={styles.year}>{post.date.year}</span>
                  </div>
                </div>
                <div className={styles.content}>
                  <p className={styles.author}>By {post.author}</p>
                  <h3 className={styles.title}>{post.title}</h3>
                  <p className={styles.excerpt}>{post.excerpt}</p>
                  <Link to={`/blog/${post.id}`} className={styles.readMore}>
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <button className={styles.loadBtn}>Load All Posts</button>
        </div>
      </section>
    </>
  );
}
