import React from 'react'
import styles from './styles.module.css'
import first from '../../../assets/body/fourDogPic/first.png'
import second from '../../../assets/body/fourDogPic/second.png'
import third from '../../../assets/body/fourDogPic/third.png'
import fourth from '../../../assets/body/fourDogPic/fourth.png'
import twitter from '../../../assets/body/socialLogos/twitter.svg'
import discord from '../../../assets/body/socialLogos/discord.svg'
import reddit from '../../../assets/body/socialLogos/reddit.svg'

const Doge = () => {
  return (
    <div className={styles.container}>
        <div className={styles.picContainer}>
            <img src={first}/>
            <img src={second}/>
            <img src={third}/>
            <img src={fourth}/>
        </div>

        <div className={styles.videoContainer}>
            <div className={styles.iframe}>
                <iframe className={styles.ifr} width="560" height="315" src="https://www.youtube.com/embed/_KVZmS_UO5I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div className={styles.rightSide}>
                <h2>Do Only Good Everyday.</h2>
                <p>The Dogecoin community cares about supporting each other, being kind, teaching people about cryptocurrency, fundraising, having fun, making memes, and being absurd. This is nicely captured by Dogecoin’s unofficial tagline: Do Only Good Everyday. Get involved in our awesome community via the below links:</p>
            </div>
        </div>

        <div className={styles.socials}>
            <div className={styles.twit}>
                twitter 
                <img src={twitter}/>
            </div>
            <div>
                <img src={reddit}/> 
                reddit 
            </div>
            <div className={styles.disc}>
                <img src={discord}/>
                Discord 
            </div>
        </div>

        
    </div>
  )
}

export default Doge