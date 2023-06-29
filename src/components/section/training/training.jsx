import { Fragment } from "react";
import styles from "./trainning.module.css";

export default function Training() {
  return (
    <Fragment>
      <h2>Meet our Team</h2>
      <div className={styles.Training}>
        <div className={styles.Training2}>
          <img src="./Image/Andres.jpeg" alt="img" className={styles.Trainer} />
          <p>Andres joe</p>
        </div>
        <div className={styles.Training2}>
          <img src="./Image/John.webp" alt="img" className={styles.Trainer} />
          <p>John Gomez</p>
        </div>
        <div className={styles.Training2}>
          <img src="./Image/James.jpeg" alt="img" className={styles.Trainer} />
          <p>James Swift</p>
        </div>
        <div className={styles.Training2}>
          <img src="./Image/Justin.webp" alt="img" className={styles.Trainer} />
          <p>Justib Bieber</p>
        </div>
        <div className={styles.Training2}>
          <img
            src="./Image/Karolina.jpeg"
            alt="img"
            className={styles.Trainer}
          />
          <p>Karolina khan</p>
        </div>
        <div className={styles.Training2}>
          <img src="./Image/Nick.jpeg" alt="img" className={styles.Trainer} />
          <p>Nick Jonas</p>
        </div>
        <div className={styles.Training2}>
          <img src="./Image/Nilov.webp" alt="img" className={styles.Trainer} />
          <p>Nilov Puth</p>
        </div>
        <div className={styles.Training2}>
          <img src="./Image/Derek.webp" alt="img" className={styles.Trainer} />
          <p>Derek Ibrahim</p>
        </div>
      </div>
    </Fragment>
  );
}
