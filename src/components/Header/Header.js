import React, { useState } from 'react'
import styles from './styles.module.css'
import image from '../../assets/MuskOnMars.png'
import shirtSVG from '../../assets/headerlogo/shirt-solid.svg'
import togglerSVG from '../../assets/headerlogo/theme-toggler.svg'
import englandSVG from '../../assets/headerlogo/england.svg'
import Bnb from '../../assets/bnb.svg'
import Twitter from '../../assets/twittter.png'
const Header = () => {
  const [dogopedia, setDogopedia] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src={image}/>
        <span>MuskOnMars</span>
      </div>
      <div className={styles.navigation}>
        <nav>
        <ul className={styles.navigation__leftside}>
          <li><a href='#'>So Home</a></li>
          <li><a href='#'>What is MuskOnMars?</a></li>
          <li><a href='#'>Much Wallets</a></li>
          <li><a href='#'>Very Community</a></li>
          <li className={styles.dogopedia}>
            <a className={styles.dogShow} href='#'>So Dogepedia
              <div className={styles.show}>
                <p>Documentation</p>
                <p>FAQ</p>
                <p>How Tos</p>
                <p>Resources</p>
              </div>
            </a>
            <span>▾</span>
          </li>
         
        </ul>
        <div className='flex'>
        <a href='https://bscscan.com/token/0x0fd7793181abe0d8b7db9aae8de354133d4b5ea3' target='_blank' >
        <img src={Bnb} alt="bnb" />
        </a>
        <a href='https://twitter.com/muskonmarscoin' target='_blank'>
          <img src={Twitter} alt='twitter' className='twitterlogo'/>
        </a>
        </div>
        </nav>
      </div>
    </div>
  )
}

export default Header