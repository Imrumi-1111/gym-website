import { Fragment } from "react";
import styles from "./pricing.module.css";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { HiArrowNarrowRight } from "react-icons/hi";

export default function Pricing() {
  return (
    <Fragment>
      <div className={styles.Fragment}>
        <div className={styles.Pricing_page1}>
          <h4>Day Pass</h4>
          <p>{<CheckCircleOutlineIcon />}1 Day Pass</p>
          <p>{<CheckCircleOutlineIcon />}Free Gym Access</p>
          <p>{<CheckCircleOutlineIcon />}24 Hours Gym Access</p>
          <button className={styles.btn}>GET STARTED</button>
        </div>
        <div className={styles.Pricing_page2}>
          <h4>Month to Month</h4>
          <p>{<CheckCircleOutlineIcon />}$99 Joining Free</p>
          <p>{<CheckCircleOutlineIcon />}No Contact</p>
          <p>{<CheckCircleOutlineIcon />}Free Gym Access</p>
          <p>{<CheckCircleOutlineIcon />}1 Group Class Included</p>
          <p>{<CheckCircleOutlineIcon />}24 Hours Gym Access</p>
          <button className={styles.btn}>GET STARTED</button>
        </div>
        <div className={styles.Pricing_para}>
          <h5>Membership</h5>
          <div>
            <h3>From Punch Pass To Monthly or Annual</h3>
            <p>
              At Gym Base, we offer a wide range of membership with options to
              suit every budget. Everything from One Day Pass. Punch Pass to
              monthly or annual prepaid memberships. What's more,we won't tie
              you in a long term contract, giving you greater flexibility.
            </p>
          </div>
        
        <div>
          <h3>Each Plan Included</h3>
          <p>{<HiArrowNarrowRight />} The best equipment global brands</p>
          <p>
            {<HiArrowNarrowRight />} The gym is open 24 hours a day. 7days a
            week
          </p>
          <p>{<HiArrowNarrowRight />} Two safe payment methods</p>
          <p>
            {<HiArrowNarrowRight />} Group fitness classes in the price of the
            subscriptions
          </p>
          <p>{<HiArrowNarrowRight />} No long-term contract period</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
