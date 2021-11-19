import React from 'react';
import styles from './assets/scss/styles.module.scss';
import './globals.scss';

import Product1Img from './assets/images/product1.png';
import Product2Img from './assets/images/product2.png';
import Product3Img from './assets/images/product3.png';
import Product4Img from './assets/images/product5.png';
import Product5Img from './assets/images/product5.png';
import Product6Img from './assets/images/product6.png';

import Card1Img from './assets/images/card1.png';
import Card2Img from './assets/images/card2.png';
import Card3Img from './assets/images/card3.png';
import Card4Img from './assets/images/card4.png';

import Favicon from './assets/images/favicon.png';
import HomeImg from './assets/images/home.png';
import AboutImg from './assets/images/about.png';

import { BsArrowRightShort, BsHandbag, BsTelephone } from 'react-icons/bs';
import { AiOutlineInstagram, AiOutlinePlus, AiOutlineMail } from 'react-icons/ai';
import { TiSocialFacebook } from 'react-icons/ti';
import { FaLinkedinIn } from 'react-icons/fa';
import { BiCheck } from 'react-icons/bi';

let array = [
  {id: 1, img: Product1Img, name: 'Lorem Ipsum', price: 35},
  {id: 2, img: Product2Img, name: 'Lorem Ipsum', price: 35},
  {id: 3, img: Product3Img, name: 'Lorem Ipsum', price: 35},
  {id: 4, img: Product4Img, name: 'Lorem Ipsum', price: 35},
  {id: 5, img: Product5Img, name: 'Lorem Ipsum', price: 35},
  {id: 6, img: Product6Img, name: 'Lorem Ipsum', price: 35},
];

export default () => {
  return(
    <div className={styles.container}>
      <nav>
        <div className={styles.logo}>
          <img src={Favicon} />
          <span>Plantanal</span>
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

        <img src={HomeImg} className={styles.homeImg} />

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

        <img src={AboutImg} />
      </section>

      <section className={styles.products}>
        <div className={styles.header}>
          <h2>Tempor orci dapibus in iaculis</h2>
          <p>Purus in mollis nunc sed id semper risus in hendrerit gravida rutrum quisque non tellus orci ac auctor augue mauris augue neque gravida</p>
        </div>

        <div className={styles.productsArea}>
          {array.map((item, k) => (
            <div className={styles.productItem} key={k}>
              <div className={styles.topInfo}>
                <div className={styles.backgroundBall}></div>

                <img src={item.img}/>
              </div>

              <div className={styles.bottomFooter}>
              <div className={styles.bottomFooterColumn}>
                <span className={styles.productName}>{item.name}</span>
                <span className={styles.price}>R$ {item.price.toFixed(2)}</span>
              </div>

                <div className={styles.bagButton}>
                  <BsHandbag color="#fff" size={18} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.steps}>
        <div className={styles.innerDiv}>
          <h2>Steps to starting planting</h2>

          <div className={styles.inlineSteps}>
            {/* STEP 1 ------------------------------------------------- */}

            <div className={styles.step}>
              <div className={styles.numberOfStepDiv}>
                <span>01</span>
              </div>

              <h3>Lorem Ipsum</h3>

              <p>habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper</p>
            </div>

            {/*  STEP 2 ------------------------------------------------- */}

            <div className={styles.step}>
              <div className={styles.numberOfStepDiv}>
                <span>02</span>
              </div>

              <h3>Lorem Ipsum</h3>

              <p>habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper</p>
            </div>

            {/* STEP 3 ------------------------------------------------- */}

            <div className={styles.step}>
              <div className={styles.numberOfStepDiv}>
                <span>03</span>
              </div>

              <h3>Lorem Ipsum</h3>

              <p>habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper</p>
            </div>

            {/* END OF STEPS ------------------------------------------------- */}
            
          </div>
        </div>
      </section>

      <section className={styles.faqs}>
        <h2>Faucibus purus in massa tempor nec feugiat</h2>

        <div className={styles.gridFaqs}>
          {/** QUESTION 1 */}

          <div className={styles.faq}>
            <AiOutlinePlus color="#000" size={20} />
            <span>Volutpat lacus laoreet non?</span>
          </div>

          {/** QUESTION 2 */}

          <div className={styles.faq}>
            <AiOutlinePlus color="#000" size={20} />
            <span>Volutpat lacus laoreet non?</span>
          </div>

          {/** QUESTION 3 */}

          <div className={styles.faq}>
            <AiOutlinePlus color="#000" size={20} />
            <span>Volutpat lacus laoreet non?</span>
          </div>

          {/** QUESTION 4 */}

          <div className={styles.faq}>
            <AiOutlinePlus color="#000" size={20} />
            <span>Volutpat lacus laoreet non?</span>
          </div>

          {/** QUESTION 5 */}

          <div className={styles.faq}>
            <AiOutlinePlus color="#000" size={20} />
            <span>Volutpat lacus laoreet non?</span>
          </div>

          {/** QUESTION 6 */}

          <div className={styles.faq}>
            <AiOutlinePlus color="#000" size={20} />
            <span>Volutpat lacus laoreet non?</span>
          </div>

          {/** END OF FAQS */}
        </div>
      </section>

      <section className={styles.contact}>
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <h1>Faucibus purus in massa tempor nec feugiat</h1>

            <div className={styles.contactInfo}>
              <span>Fringilla ut morbi tincidunt</span>
              <div className={styles.inlineContactInfo}>
                <BsTelephone color="#000" size={20} />
                <span>(00) 123456-7890</span>
              </div>
            </div>
            
            <div className={styles.contactInfo}>
              <span>Fringilla ut morbi tincidunt</span>
              <div className={styles.inlineContactInfo}>
                <AiOutlineMail color="#000" size={20} />
                <span>email@email.com</span>
              </div>
            </div>
          </div>

          <div className={styles.form}>
            <div className={styles.inputDiv}>
              <label>Name</label>
              <input />
            </div>

            <div className={styles.inputDiv}>
              <label>Subject</label>
              <input />
            </div>

            <div className={styles.inputDiv}>
              <label>Message</label>
              <textarea />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.footer}>
          <div className={styles.moreInfo}>

            <div className={styles.moreInfoItem}>
              <div className={styles.logo}>
                <img src={Favicon} />
                <span>Plantanal</span>
              </div>
              <h2>Fringilla ut morbi tincidunt augue</h2>
            </div>

            <div className={styles.moreInfoItem}>
              <span className={styles.title}>Our Address</span>

              <div className={styles.address}>
                <p>R. Lorem Ipsum - 66</p>
                <p>São Paulo - SP</p>
              </div>
            </div>

            <div className={styles.moreInfoItem}>
              <span className={styles.title}>Credit card accepteds</span>

              <div className={styles.creditCards}>
                <img src={Card1Img} />
                <img src={Card2Img} />
                <img src={Card3Img} />
                <img src={Card4Img} />
              </div>
            </div>
          </div>

          <div className={styles.newsLetter}>
            <input placeholder="Enter your email" />
            <div className={styles.subscribeButton}>
              <span>Subscribe</span>
              <BsArrowRightShort size={25} color="#fff" />
            </div>
          </div>
        </section>
    </div>
  )
}