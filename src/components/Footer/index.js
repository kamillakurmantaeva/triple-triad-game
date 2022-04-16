import React from 'react';
import Container from '../Container';
import style from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={style.root}>
      <Container>
        <div className={style.footerWrap}>
          Coded with
          <span className={style.heart}></span>
          by You
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
