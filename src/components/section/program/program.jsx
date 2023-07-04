import { Fragment, useState } from "react";
import styles from "./program.module.css";
import { useNavigate } from "react-router-dom";
import { MdOutlineArrowLeft, MdOutlineArrowRight } from "react-icons/md";
import Footer from "../../atom/footer/footer";
import Header from "../../atom/header/header";
import Head from "../../atom/header/mobileList";

export default function Program() {
  const [scroll, setScroll] = useState(0);

  const navigate = useNavigate();
  function handleSeeWholeTeam() {
    navigate("/training");
  }

  function scrollLeft() {
    const container = document.getElementById("program_container");
    if (container.scrollLeft > 0) {
      container.scrollLeft -= container.offsetWidth;
      setScroll(container.scrollLeft);
    }
  }
  function scrollRight() {
    const container = document.getElementById("program_container");
    if (container.scrollLeft + container.offsetWidth < container.scrollWidth) {
      container.scrollLeft += container.offsetWidth;
      setScroll(container.scrollLeft);
    }
  }
  return (
    <Fragment>
      <Header className={styles.Header}/>
      <Head className={styles.Head}/>
      <div className={styles.Classes}>
        <div className={styles.heading}>
          <h3>Training programs</h3>
        </div>
        <div className={styles.program_section}>
          <div className={styles.arrow}>
            <MdOutlineArrowLeft onClick={scrollLeft} />
          </div>
          <div id="program_container" className={styles.program_container}>
            <div className={styles.image_container1}>
              <img
                src="./Image/image1.jpg"
                alt=""
                className={styles.image_container}
              />
              <p>Aerobics</p>
            </div>
            <div className={styles.image_container1}>
              <img
                src="./Image/image2.jpeg"
                alt=""
                className={styles.image_container}
              />
              <p>Boxing</p>
            </div>
            <div className={styles.image_container1}>
              <img
                src="./Image/image3.jpeg"
                alt=""
                className={styles.image_container}
              />
              <p>Cardio</p>
            </div>
            <div className={styles.image_container1}>
              <img
                src="./Image/image4.jpeg"
                alt=""
                className={styles.image_container}
              />
              <p>Free-Hand</p>
            </div>
            <div className={styles.image_container1}>
              <img
                src="./Image/image5.webp"
                alt=""
                className={styles.image_container}
              />
              <p>Yoga</p>
            </div>
            <div className={styles.image_container1}>
              <img
                src="./Image/image6.jpeg"
                alt=""
                className={styles.image_container}
              />
              <p>Pillate</p>
            </div>
            <div className={styles.image_container1}>
              <img
                src="./Image/image7.webp"
                alt=""
                className={styles.image_container}
              />
              <p>Weight-Lifting</p>
            </div>
          </div>
          <div className={styles.arrow}>
            <MdOutlineArrowRight onClick={scrollRight} />
          </div>
        </div>
        <button className={styles.btn} onClick={handleSeeWholeTeam}>
          See whole team
        </button>
      </div>
      <div className={styles.Footer}>
        <Footer />
      </div>
    </Fragment>
  );
}
