import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import PhoneIcon from '../components/PhoneIcon'
import MailIcon from '../components/MailIcon'
import InstaIcon from '../components/InstaIcon'
import LocationIcon from '../components/LocationIcon'
import FacebookIcon from '../components/FacebookIcon'
import WhatsAppIcon from '../components/WhatsAppIcon'

export default function Contact() {
  return (
    <main className="contact">
      <h2 className="contact__title">Contacto</h2>

      <div className="contact__box">
        <div className="contact__map">
          <MapContainer center={[-34.8767437, -56.0978249]} zoom={15}>
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[-34.8767437, -56.0978249]}>
              <Popup>Escuela 249, Covisunca</Popup>
            </Marker>
          </MapContainer>
        </div>

        <div className="contact__data">
          <p className="contact__data-address contact__data-item">
            <LocationIcon />
            Covisunca
          </p>

          <p className="contact__data-face contact__data-item">
            <FacebookIcon />
            <a
              href="https://www.facebook.com/people/Huerta-comunitaria-escuela-249/100072506023355/"
              target="_blank"
            >
              <span className="link">Huerta Comunitaria Escuela 249</span>
            </a>
          </p>

          <p className="contact__data-insta contact__data-item">
            <InstaIcon />
            <a
              href="https://www.instagram.com/huertacomunitaria249/"
              target="_blank"
            >
              <span className="link">@huertacomunitaria249</span>
            </a>
          </p>
        </div>
      </div>

      <div className="contact__donation">
        <h3 className="contact__donation-title">SUMATE y APOYANOS</h3>

        <p className="contact__donation-text">
          Sumate y si querés apoyarnos, comunícate por nuestras formas de
          contacto.
          <br />
          Gracias.
        </p>
      </div>
    </main>
  )
}
