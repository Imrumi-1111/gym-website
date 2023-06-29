import { Fragment } from "react";
import styles from "./footer.module.css";
import Icons from "../icons/icons";

export default function Footer() {
  return (
    <Fragment>
      <div className={styles.Footer}>
        <div className={styles.footer_left}>
          <h1>Strength camp</h1>
          <p>
            “When you have a clear vision of your goal, it’s easier to take the
            first step toward it.”{" "}
          </p>
          <Icons />
        </div>
        <div className={styles.footer_right}>
          <h2>Healthy living</h2>
          <p></p>
          <h2>Services</h2>
          <p></p>
          <h2>Programms</h2>
          <p></p>
        </div>
      </div>
    </Fragment>
  );
}
