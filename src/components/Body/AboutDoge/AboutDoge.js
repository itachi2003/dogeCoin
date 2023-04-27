import React from 'react'
import styles from './styles.module.css'
import aboutDogePic from '../../../assets/body/aboutDoge/doge.webp'

const AboutDoge = () => {
  return (
    <div className={styles.container}>
        <div className={styles.container__}>
            <div className={styles.content}>
                <h2>What is Dogecoin?</h2>
                <p>An open-source peer-to-peer digital currency, favoured by Shiba Inus worldwide.</p>
                <p>At its heart, Dogecoin is the accidental crypto movement that makes people smile! It is also an opensource peer-to-peer cryptocurrency that utilises blockchain technology, a highly secure decentralised system of storing information as a public ledger that is maintained by a network of computers called nodes. More than this, though, is the ethos of Dogecoin, summarised in the Dogecoin Manifesto , and its amazing, vibrant community made up of friendly folks just like you! Learn more.</p>
            </div>
            <div className={styles.dogepic}>
                <img src={aboutDogePic}/>
            </div>
        </div>

        <div className={styles.gettingStarted}>
            <h2>Getting started</h2>
            <div className={styles.getting__container}>
                <div className={styles.getting__child}>
                    <span>01</span>
                    <span>choose  your wallet</span>
                    <p className={styles.pickwallet}>A wallet is necessary for people wanting to use, trade, or hold Dogecoin. You can pick a wallet</p>
                    <p>Learn more.</p>
                </div>

                <div className={styles.getting__child}>
                    <span>01</span>
                    <span>choose  your wallet</span>
                    <p className={styles.pickwallet}>A wallet is necessary for people wanting to use, trade, or hold Dogecoin. You can pick a wallet</p>
                    <p>Guide.</p>
                </div>

                <div className={styles.getting__child}>
                    <span>01</span>
                    <span>choose  your wallet</span>
                    <p className={styles.pickwallet}>A wallet is necessary for people wanting to use, trade, or hold Dogecoin. You can pick a wallet</p>
                    <p>Learn more.</p>
                </div>
            </div>  {/* end of .getting__container*/}
        </div>
    </div>
  )
}

export default AboutDoge