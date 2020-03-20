import React from 'react';
import GifItem from './GifItem';
import Loading from '../layout/Loading';

const Gifs = ({gifs, loading}) => {
  if (loading) {
    return <Loading />
  } else {
    return (
      <div className="gifs">
      {gifs.map(gif => (
        <GifItem key={gif.id} gif={gif} />
      ))}
      </div>
    )
  }
}

export default Gifs