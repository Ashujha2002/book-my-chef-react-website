// src/Blog/Blog.jsx
import { Link } from "react-router-dom";
import styles from "./Blog.module.css";
import Hero from "../ServicePage/Hero/Hero";
import heroImg from "../assets/dinner.jpg";

const blogPosts = [
  {
    id: 1,
    title: "How I’m Styling Everyday Black Outfits",
    excerpt:
      "It’s no secret that the digital industry is booming. From exciting startups to global brands.",
    image:
      "https://th.bing.com/th/id/OIP.TguP8o6yUuYebHodW7fOtgHaE7?w=1200&h=800&rs=1&pid=ImgDetMain",
    author: "Mitwa Dadkan",
    date: { day: "26", month: "Oct", year: "2016" },
  },
  {
    id: 2,
    title: "Fashion Essentials All Men Should Know",
    excerpt:
      "More off this less hello salamander lied porpoise much over tightly circa horse taped.",
    image:
      "https://th.bing.com/th/id/OIP.lMxykQOXFwV4r8yM4s7ckwHaE8?rs=1&pid=ImgDetMain",
    author: "Mahvus Georgia",
    date: { day: "26", month: "Oct", year: "2016" },
  },
  {
    id: 3,
    title: "Not Your Regular Home Decoration?",
    excerpt:
      "Uma molestie at eleme ntum eu facilisis sed odio. Male suada fames.",
    image:
      "https://th.bing.com/th/id/OIP.9L30RZhF7tCvo3m-PzSp4wHaE8?rs=1&pid=ImgDetMain",
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
