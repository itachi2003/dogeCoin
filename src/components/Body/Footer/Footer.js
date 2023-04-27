import React from 'react'
import styles from './styles.module.css'
import first from './assets/f.png'
import second from './assets/s.png'
import third from './assets/t.png'
import fourth from './assets/four.png'
import logo from '../../../assets/headerlogo/dogecoin-logo.png'

const Footer = () => {
  return (
    <div className={styles.container}>
        <span>Find out more about Dogecoin</span>
        <div className={styles.container__}>
            <div className={styles.childContainer}>
                <img  src={first}/>
                <p>Foundation</p>
                <p className={styles.txt}>Learn more about the Dogecoin Foundation and its Trailmap for Dogecoin!</p>
                <p className={styles.visit}>Visit -&gt;</p>
                <p className={styles.border}></p>
            </div>
            <div className={styles.childContainer}>
                <img  src={second}/>
                <p>Blogs</p>
                <p className={styles.txt}>Stay up to date with a blog posts from Foundation Developers!</p>
                <p className={styles.visit}>Visit -&gt;</p>
                <p className={styles.border}></p>
            </div>
            <div className={styles.childContainer}>
                <img  src={third}/>
                <p>Announcements</p>
                <p className={styles.txt}>Announcements from the Dogecoin Foundation can be found here.</p>
                <p className={styles.visit}>Visit -&gt;</p>
                <p className={styles.border}></p>
            </div>
            <div className={styles.childContainer}>
                <img  src={fourth}/>
                <p>IP FAQs</p>
                <p className={styles.txt}>Read our responses to some frequently asked questions about Dogecoin IP.</p>
                <p className={styles.visit}>Visit -&gt;</p>
                <p className={styles.border}></p>
            </div>
        </div>



        <div className={styles.nextContainer}>
            <div className={styles.childFirstCont + styles.childDiv}>
                <img src={logo}/>
                <p className={styles.childItem}>The Shiba Inu is a Japanese breed of dog that was popularized as an online meme and represents Dogecoin. Dogecoin was created by Jackson Palmer & Shibetoshi Nakamoto.</p>
            </div> 
            <div className={styles.childDiv}>
                <p className={styles.childTitle}>Legal</p>
                <p className={styles.childItem}>Trademarks</p>
            </div>
            <div className={styles.childDiv}>
                <p className={styles.childTitle}>Sitemap</p>
                <ul className={styles.childItem}>
                    <li>So Home</li>
                    <li>What is Dogecoin?</li>
                    <li>Much Wallets</li>
                    <li>Very Community</li>
                    <li>So Dogepedia</li>
                </ul>
            </div>
            <div className={styles.childDiv}>
                <p className={styles.childTitle}>Foundation</p>
                <ul className={styles.childItem}>
                    <li>About</li>
                    <li>Manifesto</li>
                    <li>Advisor</li>
                    <li>Blog</li>
                    <li>Trailmap</li>
                </ul>
            </div>
        </div>
        <div className={styles.lastContainer}>
            <p className={styles.lastBorder}></p>
            <p>Contributors</p>
            <p className={styles.lastEl}>© 2013-2023 | The Dogecoin Foundation & Dogecoin Project. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer