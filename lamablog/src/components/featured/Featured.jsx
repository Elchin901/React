import React from 'react'
import styles from "./featured.module.css"
import Image from 'next/image'

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, lama dev her!</b> Discover my stories and creative ideas
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill/>
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>lorem ipsum dolor sit amet mumet</h1>
          <p className={styles.postDesc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Explicabo, fuga sunt placeat iste nisi unde assumenda itaque eos laborum in. 
            Laboriosam, aperiam amet ullam error harum excepturi a natus odit.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;