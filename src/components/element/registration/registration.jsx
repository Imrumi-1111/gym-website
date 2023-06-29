import { Fragment, useState } from "react";
import styles from "./registration.module.css";
import { useNavigate } from "react-router-dom";

export default function Registration() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();
  const handleRegistration = (e) => {
    e.preventDefault();
    // Save registration details to local storage or perform necessary actions
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    setSuccessMessage("Registration successful!");
  };

  const handleGoHome = () => {
    navigate("/");
  };
  return (
    <Fragment>
      <div className={styles.Registration}>
        <h2>Registration Page</h2>
        <form onSubmit={handleRegistration}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
        {successMessage && (
          <div>
            <p>{successMessage}</p>
            <div onClick={handleGoHome}>
              <p>
                <b> Go to Strength camp</b>
              </p>
            </div>
          </div>
        )}
      </div>
    </Fragment>
  );
}
