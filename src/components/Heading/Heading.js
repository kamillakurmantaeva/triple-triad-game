import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import style from './Heading.module.css';

const Heading = ({ level = 1, className, black = false, children }) => {
  return React.createElement(
    `h${level}`,
    {
      className: cn(style.root, className, style[`level${level}`], {
        [style.colorBlack]: black,
      }),
    },
    children
  );
};

Heading.defaultProps = {
  level: 1,
  black: false,
};

Heading.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
  className: PropTypes.string,
  black: PropTypes.bool,
  children: PropTypes.node,
};

export default Heading;
