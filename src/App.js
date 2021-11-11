import React from 'react';
import styles from './assets/scss/styles.module.scss';
import './globals.scss';

import favicon from './assets/images/favicon.png';
import home from './assets/images/home.png';

export default () => {
  return(
    <div className={styles.container}>
      <nav>
        <div className={styles.logo}>
          <img src={favicon} />
          <span>Plantex</span>
        </div>

        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Products</li>
          <li>FAQs</li>
          <li>Contact Us</li>
        </ul>
      </nav>

      <section className={styles.banner}>
        <img src={home} className={styles.homeImg} />

        <div className={styles.textArea}>
          <h1>Tempor orci dapibus in iaculis nunc sed truli</h1>
          <p>Purus in mollis nunc sed id semper risus in hendrerit gravida rutrum quisque non tellus orci ac auctor augue mauris augue neque gravida</p>
          <div className={styles.button}>
            <span>Explore</span>
          </div>
        </div>
      </section>
    </div>
  )
}