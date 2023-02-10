// import PropTypes from 'prop-types'
import React, { Component } from 'react';
import { createPortal } from 'react-dom';


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
      <div  className="overlay">
        <div onClick={ this.handleCloseBackdrop } className="modal"> Modal****
          <img src={this.props.currentImg} alt="" width="800" height="600"/>
        </div>
      </div>,
     document.getElementById('modal-root')
    )
  }
}

