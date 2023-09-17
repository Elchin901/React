import React from 'react';
import styles from "./Hero.module.css";
import {getImageUrl} from "../../utils";
export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I am Ada</h1>
            <p className={styles.description}>I am a full-stack developer with 5 years of experience using React and Node.js.Reach out if you'd like to learn more</p>
            <a herf="#" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={getImageUrl("hero/heroImage.png")} alt='Hero image of me' className={styles.heroImg}></img>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>
  )
}
