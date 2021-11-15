import React from 'react';
import styles from './assets/scss/styles.module.scss';
import './globals.scss';

import favicon from './assets/images/favicon.png';
import homeImg from './assets/images/home.png';
import aboutImg from './assets/images/about.png';

import { BsArrowRightShort } from 'react-icons/bs';
import { AiOutlineInstagram } from 'react-icons/ai';
import { TiSocialFacebook } from 'react-icons/ti';
import { FaLinkedinIn } from 'react-icons/fa';
import { BiCheck } from 'react-icons/bi';

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
        <div className={styles.social}>
          <div className={styles.text}>
            <span>Follow Us</span>
          </div>
          <div className={styles.line}></div>
          <div className={styles.socialIcons}>
            <AiOutlineInstagram size={20} color="#000" />
            <TiSocialFacebook size={25} style={{marginTop: '.7rem'}} color="#000" />
            <FaLinkedinIn size={17} style={{marginTop: '.7rem'}} color="#000" />
          </div>
        </div>

        <img src={homeImg} className={styles.homeImg} />

        <div className={styles.textArea}>
          <h1>Tempor orci dapibus in iaculis nunc sed truli</h1>
          <p>Purus in mollis nunc sed id semper risus in hendrerit gravida rutrum quisque non tellus orci ac auctor augue mauris augue neque gravida</p>
          <div className={styles.button}>
            <span>Explore</span>
            <BsArrowRightShort size={25} color="#fff" />
          </div>
        </div>
      </section>

      <section className={styles.about}>
        <div className={styles.textArea}>
          <h1>Tempor orci dapibus in iaculis nunc sed truli</h1>
          <p>Purus in mollis nunc sed id semper risus in hendrerit gravida rutrum quisque non tellus orci ac auctor augue mauris augue neque gravida</p>

          <div className={styles.checkArea}>
            <div className={styles.checkItem}>
              <div>
                <BiCheck size={25} color="#fff" />
              </div>
              <span>Posuere ac ut consequat</span>
            </div>

            <div className={styles.checkItem}>
              <div>
                <BiCheck size={25} color="#fff" />
              </div>
              <span>Posuere ac ut consequat</span>
            </div>
            
            <div className={styles.checkItem}>
              <div>
                <BiCheck size={25} color="#fff" />
              </div>
              <span>Posuere ac ut consequat</span>
            </div>
          </div>

          <div className={styles.shopButton}>
            <span>Shop now</span>
            <BsArrowRightShort size={25} color="#3e6553" />
          </div>
        </div>

        <img src={aboutImg} />
      </section>
    </div>
  )
}