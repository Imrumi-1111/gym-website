import { ImMenu } from "react-icons/im";
import { useNavigate, Link } from 'react-router-dom'
import styles from './mobileView.module.css'

export default function Mobile({ closeFunction }) {
  const navigate = useNavigate();
  function handleJoin() {
    navigate("/registration");
  }
  return (
      <div className={styles.mobile}>
        
          <div className={styles.mobile_view}>
          <Link to="/" style={{ textDecoration: "none" }}>
          <p>
            <b>Strength camp</b>
          </p>
          
        </Link>
              <ImMenu
                  className={styles.icon}
                  onClick={closeFunction}
              />
          </div>
          

          <div className={styles.menuList}>
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
  )
}
