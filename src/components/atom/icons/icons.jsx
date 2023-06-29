import { Fragment } from "react";
import styles from "./icons.module.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function Icons() {
  function handleFacebook() {
    window.location.href = "https://www.facebook.com/rumi.se.33";
  }
  function handleInstagram() {
    window.location.href = "https://www.instagram.com/pinot_noir_red_11/";
  }
  function handleTwitter() {
    window.location.href = "https://twitter.com/Upasana86524211";
  }
  return (
    <Fragment>
      <div className={styles.Icons}>
        <FacebookOutlinedIcon
          onClick={handleFacebook}
          sx={{
            borderRadius: "50%",
            color: "#1877F2"
          }}
        />
        <InstagramIcon
          onClick={handleInstagram}
          sx={{
            borderRadius: "50%",
            color: "#E4405F"
          }}
        />
        <TwitterIcon
          onClick={handleTwitter}
          sx={{
            borderRadius: "50%",
            color: "#1DA1F2"
          }}
        />
      </div>
    </Fragment>
  );
}
