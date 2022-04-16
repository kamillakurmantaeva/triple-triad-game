/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Container from '../Container';
import style from './Header.module.css';

const MENU = ['Menu 1', 'Menu 2', 'Menu 3', 'Menu 4'];

const Header = () => {
  return (
    <header className={style.root}>
      <div className={style.header}>
        <Container className={style.headerWrap}>
          <div className={style.logo} />
          <ul className={style.nav}>
            {MENU.map((el) => (
              <li key={el}>
                <a href="#">{el}</a>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </header>
  );
};

export default Header;
