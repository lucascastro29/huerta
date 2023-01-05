import React, { useState } from 'react'
import LoadingIcon from './LoadingIcon'

export default function Image(props) {
  const [loaded, setLoaded] = useState(false)

  function handleOnLoad() {
    setLoaded(true)
  }

  return (
    <>
      <img
        onLoad={handleOnLoad}
        src={props.src}
        alt={props.alt ?? ''}
        className={props.className ? props.className : ''}
        style={!loaded ? { display: 'none' } : {}}
      ></img>
      {!loaded ? (
        <div className="loading-icon">
          <LoadingIcon />
        </div>
      ) : (
        ''
      )}
    </>
  )
}
