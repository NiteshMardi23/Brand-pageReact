import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div>
      <nav className={styles.nav}>
        <div className={styles.logo}> {/* Apply the logo styles */}
          <img src="/images/nikelogo.jpg" alt="Nike Logo" />
        </div>
        <ul className={styles.list}> {/* Apply the menu styles */}
          <li><a href="#">Menu</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <button className={styles.btn}>LogIn</button> {/* Apply the login button styles */}
      </nav>
    </div>
  );
};

export default Header;
