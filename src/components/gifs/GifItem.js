import React from 'react';

const GifItem = ({ gif: { title, images }}) => {
  return (
      <img src={images.original.url} alt={title} className="gif" />
  )
}

export default GifItem