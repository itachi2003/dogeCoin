import React from 'react'
import styles from './styles.module.css'
import image from '../../assets/headerlogo/dogecoin-logo.png'
import shirtSVG from '../../assets/headerlogo/shirt-solid.svg'
import togglerSVG from '../../assets/headerlogo/theme-toggler.svg'
import englandSVG from '../../assets/headerlogo/england.svg'

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src={image}/>
      </div>
      <div className={styles.navigation}>
        <nav>
        <ul className={styles.navigation__leftside}>
          <li><a href='#'>So Home</a></li>
          <li><a href='#'>What is Dogecoin?</a></li>
          <li><a href='#'>Much Wallets</a></li>
          <li><a href='#'>Very Community</a></li>
          <li className={styles.dogopedia}>
            <a href='#'>So Dogepedia</a>
            <span>▾</span>
          </li>
          <li className={styles.shirtSvg}>
            <img src={shirtSVG}/>
          </li>
        </ul>

        <div>
          <ul className={styles.nav__end__part}>
            <li className={styles.toogleLi}>
              <a><img src={togglerSVG}/></a>
            </li>
            <li>
              <a href='#' className={styles.language}>
                <img src={englandSVG}/>
                <span className={styles.language__eng}>EN</span>
                <span className={styles.svgspan}>▾</span>
              </a>
            </li>
          </ul>
        </div>
        </nav>
      </div>
    </div>
  )
}

export default Header