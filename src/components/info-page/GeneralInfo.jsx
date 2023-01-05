import React from 'react'
import Image from '../Image'
import { Splide, SplideSlide } from '@splidejs/react-splide'

const step1 = require('../../img/step1.jpeg')
const step2 = require('../../img/step2.jpg')
const step3 = require('../../img/step3.jpeg')

// const slide1 = require('../../img/info-slide/info-slide-1.jpeg')
// const slide2 = require('../../img/info-slide/info-slide-2.jpeg')
// const slide3 = require('../../img/info-slide/info-slide-3.jpeg')
// const slide4 = require('../../img/info-slide/info-slide-4.jpeg')

const images = require.context('../../img/info-slide', true, /\.jpe?g$/)

const imagesPaths = images.keys()

const imagesSources = imagesPaths.map((path) => images(path))

export default function GeneralInfo() {
  return (
    <main className="general info__page">
      <h2 className="general__title general__title--left">
        Objetivos generales
      </h2>

      <div className="general__module general__module--start">
        <div className="general__text">
          <ul className="general__list">
            <li className="general__list--item">
              Aprovechar espacios abiertos de la Escuela para convertirlos en
              áreas de recursos pedagógicos y de investigación - acción, donde
              el niño se sienta protagonista e interactúe generando nuevos
              conocimientos pedagógicos.
            </li>

            <li className="general__list--item">
              Generar hábitos de convivencia, comunicación e integración en el
              trabajo colaborativo.
            </li>

            <li className="general__list--item">
              Acercar a las familias a la Institución escolar compartiendo el
              aprendizaje de sus hijos, abriendo las puertas a la comunidad,
              favoreciendo así un intercambio permanente y creciente.
            </li>

            <li className="general__list--item">
              Interactuar activamente con las Redes de la comunidad, difundir el
              proyecto, para estimular la participación activa.
            </li>
          </ul>
        </div>

        <div className="general__img">
          <Image src={`/${step1}`} alt="" className="general__img-content" />
        </div>
      </div>

      <h2 className="general__title">Objetivos Específicos</h2>

      <div className="general__module general__module--end">
        <div className="general__text">
          <ul className="general__list">
            <li className="general__list--item">
              Incentivar el compromiso y el vínculo de las familias para con la
              Escuela: asistencias, talleres, reuniones, asambleas , trabajo
              solidario y comunitario (derechos y obligaciones).
            </li>

            <li className="general__list--item">
              Incentivar tareas agroecológicas y proyectos de investigación
              (diseño y creación de una Huerta y/o invernáculo).
            </li>

            <li className="general__list--item">
              Generar cambios y conciencia de soberanía alimentaria en la
              comunidad.
            </li>

            <li className="general__list--item">
              Transversalizar los proyectos de la escuela, abrir sus puertas
              para tender puentes con otras instituciones y trabajar en forma
              colaborativa y fluída, interactuando, construyendo juntos una red
              pedagógica (Cedel, Facultad de Ciencias, Socat, Centro Cultural
              Malvín Norte, Docentes de la Escuela de Nutrición de la Udelar…)
            </li>

            <li className="general__list--item">
              Capacitaciones para maestros e interacción con otras Escuelas y
              Liceos de la zona.
            </li>
          </ul>
        </div>

        <div className="general__img">
          <Image src={`/${step2}`} alt="" className="general__img-content" />
        </div>
      </div>

      <h2 className="general__title general__title--left">Metas</h2>

      <div className="general__module general__module--start">
        <div className="general__text">
          <ul className="general__list">
            <li className="general__list--item">
              Incentivar el compromiso de las familias, concretar propuestas:
              reuniones talleres, jornadas, muestras, encuentros.
            </li>

            <li className="general__list--item">
              Iniciativas familiares para aportar experiencias colaborativas
              nuevas.
            </li>

            <li className="general__list--item">
              Cambios en los hábitos alimenticios de los niños, familias y
              vecinos.
            </li>

            <li className="general__list--item">
              Hábitos de convivencia: escuchar, respetar, compartir materiales,
              colaborar, etc.
            </li>

            <li className="general__list--item">
              Adquisición por parte de las familias de conocimientos y prácticas
              de cultivo.
            </li>

            <li className="general__list--item">
              Valoración y uso responsable del suelo y del agua como recurso
              natural procurando su sustentabilidad a través de la huerta
              orgánica.
            </li>
          </ul>
        </div>

        <div className="general__img">
          <Image src={`/${step3}`} alt="" className="general__img-content" />
        </div>
      </div>

      <div className="general__images">
        <Splide
          options={{
            perPage: 1,
            rewind: true,
          }}
        >
          {imagesSources.map((img) => (
            <SplideSlide>
              <div className="general__img no-shadow">
                <Image
                  src={`/${img}`}
                  alt=""
                  className="general__img-content"
                />
                {img.startsWith('img/prac') ? (
                  <p className="general__img-txt">
                    Practicantes de Fac. de Ciencias en la huerta
                  </p>
                ) : (
                  ''
                )}
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </main>
  )
}
