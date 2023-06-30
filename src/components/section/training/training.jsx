import { Fragment } from "react";
import styles from "./trainning.module.css";
import Footer from "../../atom/footer/footer";
import Icons from "../../atom/icons/icons";

export default function Training() {
  return (
    <Fragment>
      <div className={styles.head}>
        <h2>Meet our Team</h2>
      </div>
      <div className={styles.Training}>
        <div className={styles.Training2}>
          <img src="./Image/Andres.jpeg" alt="img" className={styles.Trainer} />
          <p>Andres joe</p>
          <Icons/>
        </div>
        <div className={styles.Training2}>
          <img src="./Image/John.webp" alt="img" className={styles.Trainer} />
          <p>John Gomez</p>
          <Icons/>
        </div>
        <div className={styles.Training2}>
          <img src="./Image/James.jpeg" alt="img" className={styles.Trainer} />
          <p>James Swift</p>
          <Icons/>
        </div>
        <div className={styles.Training2}>
          <img src="./Image/Justin.webp" alt="img" className={styles.Trainer} />
          <p>Justib Bieber</p>
          <Icons/>
        </div>
        <div className={styles.Training2}>
          <img
            src="./Image/Karolina.jpeg"
            alt="img"
            className={styles.Trainer}
          />
          <p>Karolina khan</p>
          <Icons/>
        </div>
        <div className={styles.Training2}>
          <img src="./Image/Nick.jpeg" alt="img" className={styles.Trainer} />
          <p>Nick Jonas</p>
          <Icons/>
        </div>
        <div className={styles.Training2}>
          <img src="./Image/Nilov.webp" alt="img" className={styles.Trainer} />
          <p>Nilov Puth</p>
          <Icons/>
        </div>
        <div className={styles.Training2}>
          <img src="./Image/Derek.webp" alt="img" className={styles.Trainer} />
          <p>Derek Ibrahim</p>
          <Icons/>
        </div>
      </div>
      <div className={styles.Footer}>
        <Footer />
      </div>
    </Fragment>
  );
}
