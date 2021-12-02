import React from 'react'
import Event from './Event'

const eventosArr = require('../../data/eventos.json')

export default function EventosInfo() {
  return (
    <main className="eventos info__page">
      <h1 className="eventos__title info__page-title">Eventos</h1>

      <div className="eventos__list">
        <ul className="eventos__list-list">
          {eventosArr.length === 0
            ? 'No hay ningun evento'
            : eventosArr.map((event) => (
                <Event key={event.title} data={event} />
              ))}
        </ul>
      </div>
    </main>
  )
}
