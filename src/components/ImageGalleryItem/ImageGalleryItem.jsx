import PropTypes from 'prop-types';
import React from 'react'
import { ImageGalleryItemLi, ImageGalleryItemImage } from './ImageGalleryItem.module';

export default function ImageGalleryItem({item, onClick}){

    return (
        <ImageGalleryItemLi onClick={()=>onClick(item.previewURL)} > 
               <ImageGalleryItemImage src={item.previewURL} alt="" />
        </ImageGalleryItemLi> 
     
    )
  
}
ImageGalleryItem.propTypes = {
  item: PropTypes.shape({
    previewURL:PropTypes.string.isRequired
  }),
  onClick: PropTypes.func.isRequired,
}
