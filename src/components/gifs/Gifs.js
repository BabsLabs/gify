import React from 'react';
import GifItem from './GifItem';

const Gifs = ({gifs}) => {
  return (
    <div className="gifs">
    {gifs.map(gif => (
      <GifItem key={gif.id} gif={gif} />
    ))}
    </div>
  )
}

export default Gifs