import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.row}>
          {/* Logo & About */}
          <div className={`${styles.col} ${styles.col3}`}>
            <div className={styles.box}>
              <a href="/#" className={styles.logo}>
                <img
                  src="https://cdn.tailgrids.com/assets/images/logo/logo.svg"
                  alt="logo"
                  className={styles.logoLight}
                />
                <img
                  src="https://cdn.tailgrids.com/assets/images/logo/logo-white.svg"
                  alt="logo"
                  className={styles.logoDark}
                />
              </a>
              <p className={styles.text}>
                Sed ut perspiciatis undmnis is iste natus error sit amet
                voluptatem totam rem aperiam.
              </p>
              <p className={styles.phone}>
                <span className={styles.phoneIcon}>📞</span>
                <span>+012 (345) 678 99</span>
              </p>
            </div>
          </div>

          {/* Link Groups */}
          <LinkGroup header="Resources">
            <NavLink link="/#" label="SaaS Development" />
            <NavLink link="/#" label="Our Products" />
            <NavLink link="/#" label="User Flow" />
            <NavLink link="/#" label="User Strategy" />
          </LinkGroup>
          <LinkGroup header="Company">
            <NavLink link="/#" label="About TailGrids" />
            <NavLink link="/#" label="Contact & Support" />
            <NavLink link="/#" label="Success History" />
            <NavLink link="/#" label="Setting & Privacy" />
          </LinkGroup>
          <LinkGroup header="Quick Links">
            <NavLink link="/#" label="Premium Support" />
            <NavLink link="/#" label="Our Services" />
            <NavLink link="/#" label="Know Our Team" />
            <NavLink link="/#" label="Download App" />
          </LinkGroup>

          {/* Social */}
          <div className={`${styles.col} ${styles.col3}`}>
            <div className={styles.box}>
              <h4 className={styles.heading}>Follow Us On</h4>
              <div className={styles.social}>
                <a href="#">F</a>
                <a href="#">T</a>
                <a href="#">Y</a>
                <a href="#">L</a>
              </div>
              <p className={styles.copy}>&copy; 2025 TailGrids</p>
            </div>
          </div>
        </div>
      </div>

      {/* Background shapes */}
      <span className={styles.shape1}></span>
      <span className={styles.shape2}></span>
    </footer>
  );
};

export default Footer;

const LinkGroup = ({ children, header }) => {
  return (
    <div className={`${styles.col} ${styles.col2}`}>
      <div className={styles.box}>
        <h4 className={styles.heading}>{header}</h4>
        <ul className={styles.linkList}>{children}</ul>
      </div>
    </div>
  );
};

const NavLink = ({ link, label }) => {
  return (
    <li>
      <a href={link} className={styles.navLink}>
        {label}
      </a>
    </li>
  );
};
