import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { DiGithubBadge } from "react-icons/di";
import styles from "./About.module.css";
import { useNavigate } from "react-router-dom";

export default function About() {
  let navigate = useNavigate();
  return (
    <div>
      <button className={styles.btn} onClick={() => navigate(-1)}>
        Go back
      </button>
      <div className={styles.description}>
        Weather Application made with React.js and Javascript. This is a
        personal project built for learning purposes. The data was obtained from
        a free API (openweathermap).
        <div className={styles.social}>
          <a href="https://www.linkedin.com/in/daniela-roldan/">
            <AiFillLinkedin size="4.5rem" color="black" />
          </a>
          <a href="https://github.com/danielaroldanb/">
            <DiGithubBadge size="4.5rem" color="black" />
          </a>
        </div>
      </div>
    </div>
  );
}
