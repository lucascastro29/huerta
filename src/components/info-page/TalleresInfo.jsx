import React from 'react'
import Taller from './Taller'

const talleresArr = require('../../data/talleres.json')

export default function TalleresInfo() {
  return (
    <main className="talleres info__page">
      <h1 className="talleres__title info__page-title">Talleres</h1>

      <div className="talleres__list">
        {talleresArr.length === 0
          ? 'No hay ningun taller'
          : talleresArr.map((event) => (
              <Taller key={event.title} data={event} />
            ))}
      </div>
    </main>
  )
}
