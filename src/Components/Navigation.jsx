import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";
import logoImg from "../assets/logo.jpg";

// Decorative assets
import menuGif from "../assets/icons8.gif"; // <-- GIF icon
import decoTop from "../assets/deco.png"; // decorative small image
import decoBottom from "../assets/deco2.png"; // decorative small image
import linkIcon from "../assets/image.png"; // small icon after each link

// Background decorations
import bg1 from "../assets/56325.png";
import bg2 from "../assets/08.png";
import bg3 from "../assets/Group33.png";
// ... import all your 10 bg images

const routes = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Service", href: "/service" },
  { name: "Blog", href: "/blog" },
  { name: "Contact Us", href: "/contact" },
];

const Navigation = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScrollY.current && currentScroll > 80) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      lastScrollY.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`${styles.header} ${!showHeader ? styles.hide : ""}`}>
        <div className={styles.container}>
          {/* Logo */}
          <Link to="/" className={styles.logo}>
            <img src={logoImg} alt="Chef Choice Menu" />
          </Link>

          {/* Links (desktop only) */}
          <nav className={styles.nav}>
            {routes.map((route, i) => (
              <Link key={i} to={route.href} className={styles.navLink}>
                {route.name}
              </Link>
            ))}
          </nav>

          {/* Right side (desktop only) */}
          <div className={styles.right}>
            <Link to="/book-chef" className={styles.button}>
              Book Chef
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <div className={styles.menuIcon} onClick={() => setMenuOpen(true)}>
            <img src={menuGif} alt="menu" />
          </div>
        </div>
      </header>

      {/* Off-Canvas Menu */}
      <div className={`${styles.sidebar} ${menuOpen ? styles.open : ""}`}>
        {/* Background decoration images */}
        <img src={bg1} className={`${styles.bg} ${styles.bg1}`} alt="" />
        <img src={bg2} className={`${styles.bg} ${styles.bg2}`} alt="" />
        <img src={bg3} className={`${styles.bg} ${styles.bg3}`} alt="" />
        {/* ...repeat for all bg images */}

        <button className={styles.closeBtn} onClick={() => setMenuOpen(false)}>
          ✕
        </button>

        {/* Decorative Image Top */}
        <img src={decoTop} className={styles.decoImg} alt="decor top" />

        <h2 className={styles.menuHeading}>Menu</h2>

        {/* Decorative Image Bottom */}
        <img src={decoBottom} className={styles.decoImg} alt="decor bottom" />

        <nav className={styles.sidebarNav}>
          {routes.map((route, i) => (
            <Link key={i} to={route.href} className={styles.sidebarLink}>
              {route.name}
              <img src={linkIcon} alt="" className={styles.linkIcon} />
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Navigation;
