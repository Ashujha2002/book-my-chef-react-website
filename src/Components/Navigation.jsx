import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";
import logoImg from "../assets/logo.jpg";
// Navbar links
const routes = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Service", href: "/service" },
  { name: "Blog", href: "/blog" },
  { name: "Contact Us", href: "/contact" },
];

const Navigation = () => {
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScrollY.current && currentScroll > 80) {
        // scrolling down
        setShowHeader(false);
      } else {
        // scrolling up
        setShowHeader(true);
      }

      lastScrollY.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${!showHeader ? styles.hide : ""}`}>
      <div className={styles.container}>
        {/* Logo */}
        <Link to="/" className={styles.logo}>
          <img src={logoImg} alt="Chef Choice Menu" />
        </Link>

        {/* Navigation links */}
        <nav className={styles.nav}>
          {routes.map((route, i) => (
            <Link key={i} to={route.href} className={styles.navLink}>
              {route.name}
            </Link>
          ))}
        </nav>

        {/* Book Chef Button */}
        <div className={styles.right}>
          <Link to="/book-chef" className={styles.button}>
            Book Chef
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
