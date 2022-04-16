import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import style from './Container.module.css';

const Container = ({ className, children }) => {
  return <div className={cn(style.root, className)}>{children}</div>;
};

Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Container;
