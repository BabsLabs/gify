import React from 'react';

const GifItem = ({ gif: { title, images }}) => {
  console.log(images)
  return (
      <img src={images.original.url} alt={title} style={{ width: "200px"}} className="gif" />
  )
}

export default GifItem