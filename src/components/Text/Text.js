import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import style from './Text.module.css';

const Text = ({
  element = 'div',
  children,
  className,
  strong = false,
  italic = false,
  disabled = false,
}) => {
  return React.createElement(
    element,
    {
      className: cn(className, {
        [style.strong]: strong,
        [style.italic]: italic,
        [style.disabled]: disabled,
      }),
    },
    children
  );
};

Text.defaultProps = {
  element: 'div',
  strong: false,
  italic: false,
  disabled: false,
};

Text.propTypes = {
  element: PropTypes.oneOf(['div', 'p', 'span']).isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
  strong: PropTypes.bool,
  italic: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default Text;
