import { Fragment } from "react";
import styles from "./main.module.css";
import { useNavigate } from "react-router-dom";
import Footer from "../../atom/footer/footer";


export default function Main() {
    const navigate = useNavigate()
    function handleJoin(){
        navigate('/registration')
    }
  return (
    <Fragment>
      <div className={styles.Main}>
        <h1>
          “When you have a clear vision of your goal, it’s easier to take the
          first step toward it.”{" "}
        </h1>
        <button className={styles.btn} onClick={handleJoin}>Join with us</button>
         
        <img className={styles.img}
        src="./Image/gg.webp"
        alt="img"
        />
        
       
      </div>
     <Footer/>
    </Fragment>
  );
}
