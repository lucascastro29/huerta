import React from 'react'
import Image from './Image'
import InstaIcon from './InstaIcon'
import LinkIcon from './LinkIcon'

export default function InstaPost(props) {
  return (
    <div className="post">
      <div className="post__img">
        <Image className="post__img-content" src={props.data.media_url} />
      </div>

      <a
        className="post__hover"
        href="https://www.instagram.com/huertacomunitaria249/"
        target="_blank"
      >
        {/* <LinkIcon />
        <p className="post__caption">Ver publicación</p> */}
        <InstaIcon />
      </a>
    </div>
  )
}
