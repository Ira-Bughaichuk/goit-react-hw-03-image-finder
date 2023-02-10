import React from 'react';
import PropTypes from 'prop-types';
import { ButtonLoadMore } from './ButtonLoadMore.styled';

export default function Button({ onClick, hidden }) {
  return (
      <ButtonLoadMore  className="button" type="button" hidden={hidden} onClick={onClick}>Load More</ButtonLoadMore> 
  )
}

Button.prototype = {
  onClick: PropTypes.func.isRequired,
  hidden: PropTypes.bool.isRequired,
}
