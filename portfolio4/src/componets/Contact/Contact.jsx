import React from 'react';
import styles from './Contact.module.css';
import { getImageUrl } from '../../utils';

export const Contact = () => {
  return (
    <footer className={styles.container} id='contact'>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl('contact/emailIcon.png')} alt='Email icon'></img>
                <a href="mailto:myemail@email.com">myemail@email.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl('contact/linkedinIcon.png')} alt='LinkedIn icon'></img>
                <a href="https://www.linkedin.com/myname">linkedin.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl('contact/githubIcon.png')} alt='Github icon'></img>
                <a href="https://www.github.com/myname">github.com</a>
            </li>
        </ul>
    </footer>
  )
}
