import { SplideSlide } from '@splidejs/react-splide'
import Splide from '@splidejs/react-splide/dist/js/components/Splide'
import React, { useState, useEffect } from 'react'
import Image from './Image'
import InstaPost from './InstaPost'

export default function InstaAPI() {
  const [data, setData] = useState([])

  useEffect(async () => {
    // Update access_token every 60 days
    const res = await fetch(
      'https://graph.instagram.com/v12.0/4459047397509252/media?fields=id,media_url&access_token=IGQVJVaHhjRVRJdERMWV8ycWFZALXNhdjVpbVlseDllRzBTWk94TFFtUE5MaGlmNVpHMXVuYWlLN0xtcFBJaDZAzajdGOFJTOXRtdE1vbklIazFLUmpkYm1MREl2bDUzRUJhWEF2ZAzdR'
    )

    if (!res.ok) {
      console.log(res)
      return
    }

    const jsonData = await res.json()

    // console.log(jsonData)

    setData(jsonData.data.slice(0, 9))
  }, [])

  return data.length === 0 ? (
    ''
  ) : (
    <section className="insta-posts">
      <Splide
        options={{
          perPage: 3,
          perMove: 1,
          interval: 3500,
          rewind: true,
          pagination: false,
          arrows: false,
          autoplay: true,
          // type: 'loop',
          easing: 'ease-in-out',
        }}
      >
        {data.map((dataEl, i) => (
          <SplideSlide key={`${dataEl.media_url}`}>
            <a
              href="https://www.instagram.com/huertacomunitaria249/"
              target="_blank"
              className="post"
            >
              <Image src={dataEl.media_url} className="post__img" />
            </a>
          </SplideSlide>
        ))}
      </Splide>
    </section>
  )
}
