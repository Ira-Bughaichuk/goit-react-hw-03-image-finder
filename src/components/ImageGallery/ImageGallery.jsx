// import PropTypes from 'prop-types'
import React  from 'react';

import  ImageGalleryItem  from '../ImageGalleryItem/ImageGalleryItem';

export default function ImageGallery({ gallery,onClick }) {
    if (gallery.length === 0) {
        return null
    }
    return (
      <ul className="gallery">
            {gallery.map((item) => {
              return  <ImageGalleryItem onClick={onClick} key={item.id} item={item} />
            })}
        </ul>
    ) 
}
