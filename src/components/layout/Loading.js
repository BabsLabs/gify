import React, { Fragment } from 'react';
import loading from '../Loading.gif';

const Loading = () => {
  return (
    <Fragment>
      <img src={loading} alt="Loading" style={{ width: "250px", margin: "auto", display: "block" }} />
    </Fragment>
  )
}

export default Loading