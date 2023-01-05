import React, { useState, useEffect, useCallback } from 'react'

import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/themes/splide-default.min.css'
import Image from '../components/Image'
import Video from '../components/Video'
import InstaAPI from '../components/InstaAPI'

const logo = require('../img/logo-transparent.png')
const municipioLogo = require('../img/municipio-e-logo.png')
const cedelLogo = require('../img/cedel-logo.jpg')
const efiLogo = require('../img/f-ciencias.jpeg')
const pmcLogo = require('../img/pmc.jpg')
const rmoizoLogo = require('../img/rmoizo.png')
const monteLogo = require('../img/montenativo.jpg')
const GrinWall = require('../img/grinwall-logo.png')

const Pacific = require('../img/pacifil.png')
const PuntaGorda = require('../img/Punta-Gorda-Rotary-Club.png')
const ServiceRiego = require('../img/service-riego.png')
const Socla = require('../img/socla.png')


const video1 = require('../img/videos/plantando.webm')
const video2 = require('../img/videos/video2.webm')
const video3 = require('../img/videos/video3.webm')
const video4 = require('../img/videos/video4.webm')
const video5 = require('../img/videos/video5.webm')
const video6 = require('../img/videos/video6.webm')

const groupPhoto = require('../img/grupo.jpeg')
const frutosPhoto = require('../img/frutos.jpeg')
const alcaldesaTrabajandoPhoto = require('../img/alcaldesa-trabajando.jpeg')

const slide1 = require('../img/slide1.png')
const slide2 = require('../img/slide2.jpeg')
const slide3 = require('../img/slide3.jpeg')

const images = require.context('../img/galeria', true, /\.jpe?g$/)

const imagesPaths = images.keys()

const imagesSources = imagesPaths.map((path) => images(path))

const imagesSrcs = imagesSources.map((path) => ({
  src: path,
  link: 'https://www.facebook.com/people/Huerta-comunitaria-escuela-249/100072506023355/',
}))

// add links to images

export default function Home() {
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
    <>
      <header className="header">
        <div className="header__img">
          <Splide
            options={{
              perPage: 1,
              interval: 3500,
              arrows: 'slider',
              pagination: false,
              autoplay: true,
              type: 'loop',
              easing: 'ease-in-out',
            }}
          >
            <SplideSlide>
              <Image
                src={slide1}
                alt="slide1"
                className="header__img-content header__img-content--1"
              />
            </SplideSlide>

            <SplideSlide>
              <Image
                src={slide2}
                alt="slide2"
                className="header__img-content header__img-content--2"
              />
            </SplideSlide>

            <SplideSlide>
              <Image
                src={slide3}
                alt="slide3"
                className="header__img-content header__img-content--3"
              />
            </SplideSlide>
          </Splide>
        </div>

        <div className="header__content">
          <h1 className="header__title">Huerta Comunitaria 249</h1>
        </div>
        <div className="header__logo">
          <Image src={logo} alt="logo" />
        </div>
      </header>

      <main className="main">
        <section className="que-hacemos">
          <div className="que-hacemos__title">
            <h2 className="que-hacemos__title-content">Sobre nosotros</h2>
          </div>

          <p className="que-hacemos__par que-hacemos__par--1">
            Este proyecto de Maestras Comunitarias surge como una estrategia
            pedagógica de atención a la diversidad socio educativa que nos
            interpela como Escuela, para motivar y afianzar los vínculos con la
            comunidad.
          </p>

          <div className="que-hacemos__image que-hacemos__image--1">
            <Image
              src={frutosPhoto}
              alt="frutos"
              className="que-hacemos__image--content"
            />
          </div>
          <div className="que-hacemos__image que-hacemos__image--2">
            <Image
              src={groupPhoto}
              alt="grupo"
              className="que-hacemos__image--content"
            />
          </div>
          <div className="que-hacemos__image que-hacemos__image--3">
            <Image
              src={alcaldesaTrabajandoPhoto}
              alt="alcaldesa trabajando"
              className="que-hacemos__image--content"
            />
          </div>

          <p className="que-hacemos__par que-hacemos__par--2">
            Incentivar el desarrollo del trabajo interdisciplinar qué entendemos
            es necesario instrumentar en la escuela y en la comunidad además del
            trabajo cooperativo y solidario.
          </p>

          <p className="que-hacemos__par que-hacemos__par--3">
            Permite la participación de todos, dando oportunidades para que se
            manifiesten las diferentes capacidades de los involucrados. Está
            demostrado que la incorporación de huertas escolares en los centros
            educativos favorece el desarrollo cognitivo y emocional de los
            estudiantes, motivando el contacto con la naturaleza, creando lazos
            afectivos con el entorno y fomentando el trabajo en equipo.
          </p>

          <div className="que-hacemos__video">
            <video
              className="que-hacemos__video-content"
              muted
              autoPlay
              loop
              width="100%"
              height="100%"
            >
              <source src={video1} type="video/webm"></source>
            </video>
          </div>
        </section>

        <div className="border-medium"></div>

        {/* <InstaAPI /> */}

        <section className="data">
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
              rel="noreferrer"
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
                <Video class="slide__video" src={video5} pauseOnBlur={true} />
              </SplideSlide>

              <SplideSlide>
                <Video class="slide__video" src={video6} pauseOnBlur={true} />
              </SplideSlide>

              <SplideSlide>
                <Video class="slide__video" src={video4} pauseOnBlur={true} />
              </SplideSlide>

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

        <section className="apoyan">
          <h2 className="apoyan__title info__page-title">Quiénes nos apoyan</h2>

          <div className="apoyan__list">
            <a
              href="https://municipioe.montevideo.gub.uy/"
              target="_blank"
              rel="noreferrer"
              className="apoyan__item link"
            >
              <Image
                src={municipioLogo}
                alt="logo"
                className="apoyan__item-img"
              />
              <span>Municipio E</span>
            </a>
            <a
              href="https://montevideo.gub.uy/areas-tematicas/empresas-y-economia/centros-de-desarrollo-local-cedel/cedel-carrasco"
              target="_blank"
              rel="noreferrer"
              className="apoyan__item link"
            >
              <Image alt="logo" className="apoyan__item-img" src={cedelLogo} />
              <span>CEDEL Carrasco</span>
            </a>

            <a
              href="https://www.facebook.com/groups/coop.covisunca/"
              target="_blank"
              rel="noreferrer"
              rel="noreferrer"
              className="apoyan__item link"
            >
              <span className="no-img">Covisunca</span>
            </a>

            <a
              href="https://www.dgeip.edu.uy/programas/pmc/"
              target="_blank"
              rel="noreferrer"
              className="apoyan__item link"
            >
              <Image
                alt="logo"
                className="apoyan__item-img apoyan__item-img--rec"
                src={pmcLogo}
              />
              <span>PMC</span>
            </a>

            <a
              href="http://extension.fcien.edu.uy/tag/efi/"
              target="_blank"
              rel="noreferrer"
              className="apoyan__item link"
            >
              <Image
                alt="logo"
                className="apoyan__item-img apoyan__item-img--rec-med"
                src={efiLogo}
              />
              <span>Fac. de Ciencias</span>
            </a>

            <a
              href="https://rmoizo.com/"
              target="_blank"
              rel="noreferrer"
              className="apoyan__item link"
            >
              <Image
                alt="logo"
                className="apoyan__item-img apoyan__item-img--rec-l"
                src={rmoizoLogo}
              />
              <span>RMoizo</span>
            </a>

            <a
              href="http://www.montenativo.com/"
              target="_blank"
              rel="noreferrer"
              className="apoyan__item link"
            >
              <Image
                alt="logo"
                className="apoyan__item-img apoyan__item-img--rec-xl"
                src={monteLogo}
              />
              <span>Montenativo</span>
            </a>
            <a
              href="https://grinwall.com/"
              target="_blank"
              rel="noreferrer"
              className="apoyan__item link"
            >
              <Image src={GrinWall} alt="logo" className="apoyan__item-img" />
              <span>Grin Wall</span>
            </a>
            <a
              href="https://pacifil.com/"
              target="_blank"
              rel="noreferrer"
              className="apoyan__item link"
            >
              <Image src={Pacific} alt="logo" className="apoyan__item-img" />
              <span>Pacifil - Tashiro & Takata </span>
            </a>
            <a
              href="https://puntagordarotary.org/"
              target="_blank"
              rel="noreferrer"
              className="apoyan__item link"
            >
              <Image src={PuntaGorda} alt="logo" className="apoyan__item-img" />
              <span>Rotary Club of Punta Gorda </span>
            </a>

            <a
              href="https://serviceriegos.com.uy/"
              target="_blank"
              rel="noreferrer"
              className="apoyan__item link"
            >
              <Image
                src={ServiceRiego}
                alt="logo"
                className="apoyan__item-img"
              />
              <span>Service Riegos</span>
            </a>

            <a
              href="https://soclaglobal.com/"
              target="_blank"
              rel="noreferrer"
              className="apoyan__item link"
            >
              <Image src={Socla} alt="logo" className="apoyan__item-img" />
              <span>Socla</span>
            </a>
          </div>
        </section>
      </main>
    </>
  )
}
