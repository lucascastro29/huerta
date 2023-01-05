import React, { useState, useEffect, useCallback } from 'react'

import GeneralInfo from '../components/info-page/GeneralInfo'
import EventosInfo from '../components/info-page/EventosInfo'
import TalleresInfo from '../components/info-page/TalleresInfo'

// Sub nav containing: Eventos, Encuentros y Talleres

export default function Info() {
  const [hash, setHash] = useState(window.location.hash)
  const [content, setContent] = useState()

  const handleHashChange = useCallback(() => {
    setHash(location.hash)
  })

  useEffect(() => {
    if (location.hash) {
      handleHashChange()
    } else {
      window.location.hash = 'general'
    }

    window.addEventListener('hashchange', handleHashChange)

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  useEffect(() => {
    if (!hash) return

    switch (hash) {
      case '#general':
        setContent(<GeneralInfo />)
        break
      case '#eventos':
        setContent(<EventosInfo />)
        break
      case '#encuentros':
        break
      case '#talleres':
        setContent(<TalleresInfo />)
        break
    }
  }, [hash])

  return (
    <div className="info__parent">
      <div className="info__nav">
        <p className="info__nav-title">Información</p>

        <ul className="info__nav-list">
          <a
            className={`${
              window.location.hash === '#general' ? 'selected' : ''
            }`}
            href="#general"
          >
            <li className="info__nav-item">General</li>
          </a>

          <a
            className={`${
              window.location.hash === '#eventos' ? 'selected' : ''
            }`}
            href="#eventos"
          >
            <li className="info__nav-item">Eventos</li>
          </a>

          <a
            className={`${
              window.location.hash === '#talleres' ? 'selected' : ''
            }`}
            href="#talleres"
          >
            <li className="info__nav-item">Talleres</li>
          </a>
        </ul>
      </div>

      {content}
    </div>
  )
}
