import { Fragment } from "react";
import styles from "./about.module.css";
import YouTube from "react-youtube";

import { useNavigate } from "react-router-dom";
import Footer from "../../atom/footer/footer";

export default function About() {
    const navigate = useNavigate()
    function handleSeeWholeTeam(){
        navigate('/team')
    }
  const videoId = "KaBmao5e_54";
  const videoId2 = "2pLT-olgUJs";
  function playVideo() {
    console.log("video played");
  }
  function handleLearnMore() {
    alert("Clicked from About us section");
  }
  return (
    <Fragment>
      <div className={styles.About}>
        <YouTube videoId={videoId} onReady={playVideo} />
        <h2>About us</h2>
        <p></p>
        <button className={styles.btn} onClick={handleLearnMore}>
          Learn More
        </button>
        
        <h2>Why choose us?</h2>
        <ul>
          <li>Consultation with Expert</li>
          <p>
            Make your workouts work harder. From setting goals to customizing
            your workouts, our trainers draw on proven strategies to ensure
            you’re moving in the direction you want.
          </p>
          <li>Best workout Facilities</li>
          <p>
            We have 24/7 workout facility with smart machine and large number 
            of machines.
          </p>
        </ul>
        <button className={styles.btn} onClick={handleSeeWholeTeam}>
          See whole team
        </button>
        <YouTube videoId={videoId2} onReady={playVideo} />
      </div>
      <div className={styles.Footer}>
      <Footer/>
      </div>
      
    </Fragment>
  );
}
