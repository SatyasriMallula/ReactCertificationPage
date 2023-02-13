import React from "react";
import styles from "./home.module.css";
export const Navbar = () => {
  return (
    <div id={styles.Navbar}>
      <div id={styles.img}>
        <img
          src="https://edu-web-fundamentals.web.app/static/media/logo.58169365.png"
          alt="Logo"
          height="30px"
          width="30px"
        ></img>
        <p>Kafene</p>
      </div>
      <div id={styles.list}>
        <a className={styles.list} href="/home">
          Orders
        </a>
        <a className={styles.list} href="/products">
          Products
        </a>
        <a className={styles.list} href="/users">
          Users
        </a>
      </div>
      <div id={styles.logout}>
        <a href=" /" className={styles.list}>
          Logout
        </a>
      </div>
    </div>
  );
};
