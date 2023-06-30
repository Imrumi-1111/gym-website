import { Fragment } from "react";
import styles from "./main.module.css";
import { useNavigate } from "react-router-dom";

export default function Main() {
  //navigating to registration page logic
  const navigate = useNavigate();
  function handleJoin() {
    navigate("/registration");
  }
  return (
    <Fragment>
      <div className={styles.Main}>
        <h1>
          “When you have a clear vision of your goal, it’s easier to take the
          first step toward it.”{" "}
        </h1>
        <button className={styles.btn} onClick={handleJoin}>
          Join with us
        </button>
{/* <div><video src="./Video/chainpull.mp4"/></div> */}
        <img className={styles.img} src="./Image/main.jpeg" alt="img" />
      </div>
    </Fragment>
  );
}
