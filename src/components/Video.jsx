import React from 'react'

export default function Video(props) {
  return (
    <video
      className={props.class}
      controls
      width="100%"
      height="100%"
      onBlur={(e) => {
        if (props.pauseOnBlur) {
          e.target.pause()
        }
      }}
    >
      <source src={props.src} type="video/webm"></source>
    </video>
  )
}
