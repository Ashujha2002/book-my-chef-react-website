import blog1 from "../Blog/Contents/Blog1.js";
import blog2 from "../Blog/Contents/Blog2.js";
import blog3 from "../Blog/Contents/Blog3.js";
import image1 from "../assets/PR2.jpeg";
import imag2 from "../assets/10.png";
import imag3 from "../assets/dinner.jpg";

const blogPosts = [
  {
    id: 1,
    title: "Top Benefits of Hiring a Private Chef for Your Events in India",
    excerpt: "Organizing an event can be stressful—but a private chef makes it easier.",
    image: image1,
    author: "Chef Arjun",
    date: "Jan 15, 2025",
    content: blog1,
  },
  {
    id: 2,
    title: "Top 10 Easy Dinner Recipes",
    excerpt: "Quick, simple, and delicious dinners under 30 minutes.",
    image: imag2,
    author: "Chef Meera",
    date: "Feb 02, 2025",
    content: blog2,
  },
  {
    id: 3,
    title: "5 Secrets of Professional Chefs",
    excerpt: "Insider tricks to elevate your home cooking instantly.",
    image: imag3,
    author: "Chef Ravi",
    date: "Feb 10, 2025",
    content: blog3,
  },
];

export default blogPosts;
