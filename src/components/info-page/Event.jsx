import React, { useEffect, useState } from 'react'
import LinkIcon from '../LinkIcon'
import Image from '../Image'

export default function Event(props) {
  const [image, setImage] = useState()

  useEffect(() => {
    setImage(require(`../../data/${props.data.img}`))
  }, [])

  return (
    <div className="event__wrapper">
      <div className="event">
        <div
          className={`event__img event__img--${props.data.title
            .split(' ')
            .join('-')
            .toLowerCase()}`}
        >
          <Image src={image} alt="asd" className="event__img-content" />
        </div>

        <p className="event__title">{props.data.title}</p>

        <p className="event__date">
          Fecha: <span className="data">{props.data.date}</span>
        </p>
        <p className="event__time">
          Hora: <span className="data">{props.data.time}</span>
        </p>

        <a href={props.data.link} target="_blank" className="event__more-info">
          <span className="text">Mas información</span> <LinkIcon />
        </a>
      </div>
    </div>
  )
}
