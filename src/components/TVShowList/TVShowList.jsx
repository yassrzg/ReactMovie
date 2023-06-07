import React from 'react'
import s from './style.module.css'
import TVShowListItem from '../TVShowListItem/TVShowListItem'

export default function TVShowList({tvShowList, onClickItem}) {
  return (
    <div>
        
        <div className={s.title}>You may also like:</div>
        <div className={s.list}>
        {tvShowList.map((tvShow) => {
          return (
            <span key={tvShow.id} className={s.tv_show_list_item}>
              <TVShowListItem onClick={onClickItem} tvShow={tvShow} />
            </span>
          );
        })}
      </div>
    </div>
  )
}
