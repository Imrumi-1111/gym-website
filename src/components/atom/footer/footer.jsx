import { Fragment } from "react";
import styles from "./footer.module.css";
import Icons from "../icons/icons";
import Wave from "react-wavify";

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
          <div className={styles.footer_right_p}>
          <h2>Healthy living</h2>
          <p>We transform your life</p>
          <p>We provide easy to maintain diet chart</p>
          </div>
          <div className={styles.footer_right_p}>
          <h2>Services</h2>
          <p>24/7</p>
          <p>7 days per week</p>
          </div>
          <div className={styles.footer_right_p}>
          <h2>Programs</h2>
          <p>Aerobics</p>
          <p>Boxing</p>
          <p>Pillate</p>
          </div>
        </div>
        
      </div>
      <div className={styles.Wave}>
      <Wave
      fill="rgb(162, 162, 185)"
      paused={false}
      options={{
        height:60,
        amplitude:80,
        speed:0.16,
        points:9
      }}
      />
      </div>
    </Fragment>
  );
}
