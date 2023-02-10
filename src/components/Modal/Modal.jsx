import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalDiv } from './Modal.styled';

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleCloseEsc);
  }
  componentWillUnmount() {
        window.removeEventListener('keydown', this.handleCloseEsc);
  }

 handleCloseEsc=(e) => {
      if (e.code === 'Escape') {
        this.props.onCloseModal(); 
      }
  }
  handleCloseBackdrop = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      this.props.onCloseModal();
    }
  };
  render() {
    return createPortal(
      <Overlay onClick={ this.handleCloseBackdrop } className="overlay">
        <ModalDiv  className="modal">
          <img src={this.props.currentImg} alt="" width="800" height="600"/>
        </ModalDiv>
      </Overlay>,
     document.getElementById('modal-root')
    )
  }
}
Modal.propTypes = {
  currentImg: PropTypes.string.isRequired,
}

