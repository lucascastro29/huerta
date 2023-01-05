import React, { useState, useEffect, useCallback } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import Video from '../components/Video'
import Image from '../components/Image'

const video1 = require('../img/videos/plantando.webm')
const video2 = require('../img/videos/video2.webm')
const video3 = require('../img/videos/video3.webm')

const imagesFolder = require.context('../img/galeria', true, /\.jpe?g$/)

const imagesPaths = imagesFolder.keys()

const imagesSources = imagesPaths.map((path) => imagesFolder(path))

const imagesSrcs = imagesSources.map((path) => ({
  src: path,
  link: 'https://www.facebook.com/people/Huerta-comunitaria-escuela-249/100072506023355/',
}))

export default function Gallery() {
  const [windowWidth, setWindowWidth] = useState()

  const [images, setImages] = useState('gallery')

  const handleResize = useCallback(() => {
    setWindowWidth(window.innerWidth)
  })

  useEffect(() => {
    setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    if (windowWidth <= 1100) {
      setImages('slide')
    } else {
      setImages('gallery')
    }
  }, [windowWidth])

  return (
    <section className="data">
      <h2 className="info__page-title">Galería</h2>
      {images === 'gallery' ? (
        <div className="data__collage collage">
          {imagesSrcs.map((img, ind) => {
            let priority = 'small'

            if (ind % 3 === 0) {
              priority = 'medium'
            }

            return (
              <div
                className={`collage__item collage__item--${priority}`}
                key={img.src}
              >
                <a
                  target="_blank"
                  href={img.link}
                  className="collage__item-link"
                ></a>
                <Image
                  src={img.src}
                  alt={img.src}
                  className="collage__item-content"
                />
              </div>
            )
          })}
        </div>
      ) : (
        <div className="data__slide slide">
          <Splide
            options={{
              rewind: true,
            }}
          >
            {imagesSrcs.map((img) => (
              <SplideSlide key={img.src}>
                <div className="slide__item" key={img.src}>
                  <a
                    target="_blank"
                    href={img.link}
                    className="slide__item-link"
                  ></a>
                  <Image
                    src={img.src}
                    alt={img.src}
                    className="slide__item-content"
                  />
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      )}

      <div className="data__slide slide">
        <Splide
          options={{
            rewind: true,
            lazyLoad: true,
          }}
        >
          <SplideSlide>
            <Video class="slide__video" src={video3} pauseOnBlur={true} />
          </SplideSlide>

          <SplideSlide>
            <Video class="slide__video" src={video1} pauseOnBlur={true} />
          </SplideSlide>

          <SplideSlide>
            <Video class="slide__video" src={video2} pauseOnBlur={true} />
          </SplideSlide>
        </Splide>
      </div>
    </section>
  )
}
