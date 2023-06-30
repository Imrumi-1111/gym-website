import { Fragment } from "react";
import styles from "./pages.module.css";
import Header from "../../atom/header/header";
import Main from "../../molecule/main/main";

export default function Pages() {
  return (
    <Fragment>
      <div className={styles.Pages}>
        <Header />
        <Main />
      </div>
    </Fragment>
  );
}
