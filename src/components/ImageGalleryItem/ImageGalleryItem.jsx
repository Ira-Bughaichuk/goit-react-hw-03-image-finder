// import PropTypes from 'prop-types'
import React from 'react'

export default function ImageGalleryItem({item, onClick}){

    return (
        <li onClick={()=>onClick(item.previewURL)} className="gallery-item"> 
               <img src={item.previewURL} alt="" />
        </li> 
     
    )
  
}
