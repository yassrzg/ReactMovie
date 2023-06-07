import React, { useEffect, useState } from 'react'
import "./global.css";
import s from "./style.module.css"
import { TVShowAPI } from './api/tv-show';
import { BACKDROP_BASE_URL } from './config';
import TVShowDetail from './components/TVShowDetail/TVShowDetail';
import Logo from './components/Logo/Logo';
import logo from './assets/images/logo .png'
import TVShowListItem from './components/TVShowListItem/TVShowListItem';
import TVShowList from './components/TVShowList/TVShowList';
import SearchBar from './components/SearchBar/SearchBar';


export default function App() {
  const [currentTVShow, setCurrentTVShow] = useState();
  const [recommendationList, setRecommendationList] = useState([]);

  

  async function fetchPopulars() {
    try{
      const populars = await TVShowAPI.fetchPopulars();
      if(populars.length>0) {
        setCurrentTVShow(populars[0])
      }
    }catch(error) {
      alert('erreur, le serveur le répond pas' + error.message)
    }
  }

  async function fetchRecommendations(tvShowId) {
    try{
      const recommendations = await TVShowAPI.fetchRecommendations(tvShowId);
      if(recommendations.length>0) {

        // je récupère les 10 premier éléments avec la fct slice
        setRecommendationList(recommendations.slice(0, 10));
      }
    }catch(error) {
      alert('erreur durant la recherche de la recommendation' + error.message)
    }
  }

  useEffect(() => {
    fetchPopulars();
  }, []);

  useEffect(() => {
    if(currentTVShow) {
      fetchRecommendations(currentTVShow.id)
    }
  }, [currentTVShow])

  function setCurrentTvSHowFromRecommendation(tvShow) {
    alert(JSON.stringify(tvShow))
  }

  async function searchTVShow(tvShowName) {
    try {
      const searchResponse = await TVShowAPI.fetchByTitle(tvShowName);

      if(searchResponse.length > 0) {
        setCurrentTVShow(searchResponse[0]);
      }
    }catch(error) {
      alert('Erreur durant la recherche' + error.message)
    }
  }

  return (
    <div className={s.main_container}
    style={{background:currentTVShow ? 
      `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url("${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}") no-repeat center / cover` : "black",}} 
      >
        <div className={s.header}>
          <div className='row'>
            <div className='col-4'>
              <Logo image = {logo} title='YassineMovie' subtitles='look movie yassine'/>
            </div>
            <div className='col-sm-12 col-md-4'>
              <SearchBar onSubmit={searchTVShow}/>
            </div>
          </div>
        </div>
        <div className={s.tv_show_detail}>
          {currentTVShow && <TVShowDetail tvShow={currentTVShow}/> }
        </div>
        <div className={s.recommendations}>
          {recommendationList && recommendationList.length > 0 && (
            <TVShowList 
              onClickItem= {setCurrentTVShow} 
              tvShowList= {recommendationList} />
            )}
          </div>
    </div>
  )
}
