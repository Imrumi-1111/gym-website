import { Fragment } from "react";
import styles from "./pages.module.css";
import Header from "../../atom/header/header";
import Main from "../../molecule/main/main";
import Head from "../../atom/header/mobileList";

export default function Pages() {
  return (
    <Fragment>
      <div className={styles.Pages}>
        <Head/>
        <Header />
        <Main />
      </div>
    </Fragment>
  );
}
