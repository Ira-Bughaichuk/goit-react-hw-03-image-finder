import PropTypes from 'prop-types'
import React  from 'react';

import  ImageGalleryItem  from '../ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryUl } from './ImageGallery.styled';

export default function ImageGallery({ gallery,onClick }) {
    if (gallery.length === 0) {
        return null
    }
    return (
      <ImageGalleryUl className="gallery">
            {gallery.map((item) => {
              return  <ImageGalleryItem onClick={onClick} key={item.id} item={item} />
            })}
        </ImageGalleryUl>
    ) 
}

ImageGallery.propTypes = {
  gallery: PropTypes.arrayOf(PropTypes.shape({
    id:PropTypes.number.isRequired
  })),
  onClick: PropTypes.func.isRequired,
}