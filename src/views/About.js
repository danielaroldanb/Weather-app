import React from "react";
import { Link } from "react-router-dom";
import { AiFillLinkedin } from "react-icons/ai";
import { DiGithubBadge } from "react-icons/di";
import styles from "./About.module.css";

export default function About() {
  return (
    <div>
      <div className={styles.description} >
        El clima es el estado más frecuente de la atmósfera de un lugar de la
        superficie terrestre; es decir, una descripción estadística de las
        condiciones meteorológicas más frecuentes de una región en cierto
        periodo de tiempo
      </div>
      <div className={styles.social}>
        <a href="https://www.linkedin.com/in/daniela-roldan/">
          <AiFillLinkedin size="4.5rem" color="black" />
        </a>
        <a href="https://github.com/danielaroldanb/">
          <DiGithubBadge size="4.5rem" color="black" />
        </a>
      </div>
    </div>
  );
}
