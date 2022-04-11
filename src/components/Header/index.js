/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import style from './Header.module.css';

const MENU = ['Menu 1', 'Menu 2', 'Menu 3', 'Menu 4'];

const Header = () => {
  return (
    <header className={style.root}>
      <div className={style.header}>
        <div className={style.container}>
          <div className={style.logo}></div>
          <ul className={style.nav}>
            {MENU.map((el) => (
              <li>
                <a href="#">{el}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
