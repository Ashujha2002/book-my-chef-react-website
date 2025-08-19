import { Link } from "react-router-dom";
import styles from "./Navigation1.module.css";

const routes = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/service" },
  { name: "Why us?", href: "/why-us" },
  { name: "How It Works", href: "/how-it-works" },
  { name: "Features", href: "/features" },
  { name: "Testimonials", href: "/testimonials" },
];

const Navigation1 = () => {
  return (
    <div className={styles.navbarWrapper}>
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <Link to="/" className={styles.brand}>
            Easy Frontend
          </Link>

          <input type="checkbox" id="menu-toggle" className={styles.toggle} />
          <label htmlFor="menu-toggle" className={styles.toggler}>
            <span></span>
          </label>

          <div className={styles.menu}>
            {routes.map((route, i) => (
              <Link key={i} to={route.href} className={styles.link}>
                {route.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation1;
