import React from 'react'
import s from './style.module.css'
import { Search } from 'react-bootstrap-icons'

export default function SearchBar({onSubmit}) {

  function submit(e) {
    if(e.key === "Enter" && e.target.value.trim() !== "") {
      onSubmit(e.target.value);
      console.log(e.target.value)
    }

  }
  return (
    <div>
        <Search  
            size={27} 
            className={s.icone}/>
        <input 
            onKeyUp={submit}
            type='text' 
            placeholder='Search a tv show you may like' 
            className={s.input} />
    </div>
  )
}
