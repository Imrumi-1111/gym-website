import { Fragment } from "react";
import styles from "./header.module.css";
import { Link, useNavigate } from "react-router-dom";


export default function Header() {
    const navigate = useNavigate()
    function handleJoin(){
navigate('/registration')
    }
  return (
    <Fragment>
      <div className={styles.Header}>
        
        <Link to="/" style={{textDecoration:"none"}}><p><b>Strength camp</b></p></Link>
        <Link to="/about"style={{textDecoration:"none"}}><p>About us</p></Link>
        <Link to="/program"style={{textDecoration:"none"}}><p>Program</p></Link>
        <Link to="/training"style={{textDecoration:"none"}}><p>Training</p></Link>
        <Link to="/pricing"style={{textDecoration:"none"}}><p>Pricing</p></Link>
        <button className={styles.btn} onClick={handleJoin}>Join us</button>

      </div>
    </Fragment>
  );
}
