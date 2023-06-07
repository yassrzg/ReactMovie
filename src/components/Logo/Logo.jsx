import React from 'react'
import s from './style.module.css'

export default function Logo({image, title, subtitles}) {
  return (
    <div>
        <div className={s.container}>
            <img src={image} className={s.img} />
            <span className={s.title}>{title}</span>
        </div>
        <span className={s.subtitles}>{subtitles}</span>
    </div>
  )
}
