import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import Image from '../Image'

export default function Taller(props) {
  const [images, setImages] = useState([])

  useEffect(() => {
    const imagesSrcs = props.data.images.map((src) =>
      require(`../../data/${src}`)
    )

    if (!imagesSrcs) return

    setImages(imagesSrcs)
  }, [])

  return (
    <div className="taller">
      <div className="taller__images">
        <Splide options={{ rewind: true, perPage: 1, pagination: false }}>
          {images.length === 0
            ? ''
            : images.map((img) => (
                <SplideSlide key={img}>
                  <div className="taller__img">
                    <Image
                      src={img}
                      alt="asd"
                      className="taller__img-content"
                    />
                  </div>
                </SplideSlide>
              ))}
        </Splide>
      </div>

      <div className="taller__background"></div>

      <p className="taller__title">{props.data.title}</p>

      <p className="taller__desc">{props.data.desc}</p>

      <Link to="/contacto" className="taller__link">
        Me interesa &rarr;
      </Link>
    </div>
  )
}
