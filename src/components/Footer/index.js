import React from 'react';
import style from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={style.root}>
      <div className={style.container}>
        <div className={style.footerWrap}>
          Coded with
          <span className={style.heart}></span>
          by You
        </div>
      </div>
    </footer>
  );
};

export default Footer;
