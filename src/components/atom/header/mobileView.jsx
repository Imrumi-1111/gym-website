import { Fragment, useState } from "react";
import styles from "./header.module.css";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  function handleShowList() {
    setShow(!show);
  }

  function handleJoin() {
    navigate("/registration");
  }

  return (
    <Fragment>
      <div className={styles.Header}>
        <div className={styles.MenuIcon} onClick={handleShowList}>
          <div className={`${styles.MenuIconLine} ${show ? styles.Open : ""}`}></div>
          <div className={`${styles.MenuIconLine} ${show ? styles.Open : ""}`}></div>
          <div className={`${styles.MenuIconLine} ${show ? styles.Open : ""}`}></div>
        </div>
        <Link to="/" style={{ textDecoration: "none" }}>
          <p>
            <b>Strength camp</b>
          </p>
        </Link>
        <div className={`${styles.Navbar} ${show ? styles.Show : ""}`}>
          <Link to="/about" style={{ textDecoration: "none" }}>
            <p>About us</p>
          </Link>
          <Link to="/program" style={{ textDecoration: "none" }}>
            <p>Program</p>
          </Link>
          <Link to="/training" style={{ textDecoration: "none" }}>
            <p>Training</p>
          </Link>
          <Link to="/pricing" style={{ textDecoration: "none" }}>
            <p>Pricing</p>
          </Link>
          <button className={styles.btn} onClick={handleJoin}>
            Join us
          </button>
        </div>
      </div>
    </Fragment>
  );
}
