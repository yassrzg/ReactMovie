import React from 'react'
import s from './style.module.css'
import { StarFill, Star as StarEmpty, StarHalf } from 'react-bootstrap-icons'

export default function FiveStarRating({rating}) {
  // Déclarer un tableau d'étoiles jsx vide
  const starList = [];
  // Stocker dans une variable le nombre d'étoile pleine
  const starFillCOunt = Math.floor(rating);

  // Stocker dans une variable si oui ou non il y'a une demi étoile
  const hasStarHalf = rating - starFillCOunt >= 0.5;

  // Stocker dans une variable le nombre d'étoile vide
  const emptyStarCount = 5- starFillCOunt - (hasStarHalf ? 1 : 0)

  // Pusher dans le tableau les étoiles pleine

  for(let i = 1 ; i <= starFillCOunt; i++) {

    starList.push(<StarFill key={"star-fill" + i} />)
  }

  // Pusher dans le tableau les démi étoiles

  if(hasStarHalf) {
    starList.push(<StarHalf key={"star-half"} />)
  }

  // Pusher dans le tableau les étoiles vide
  for(let i = 1 ; i <= emptyStarCount; i++) {

    starList.push(<StarEmpty key={"star-empty" + i} />)
  }
  return (
    <div>{starList}</div>
  )
}
