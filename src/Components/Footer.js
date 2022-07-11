import React from 'react';
import Banner from '../Assets/abra-img.png';
import FooterCss from './Footer.module.css'

const Footer = () => {
  return (
      <img src={Banner} alt="Abra banner" className={FooterCss.banner}/>
  )
}

export default Footer;