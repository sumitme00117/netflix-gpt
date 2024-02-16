import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContaineer from './SecondaryContaineer'
import usePopularMovies from '../hooks/usePopularMovies'
import GptSearch from './GptSearch'
import { useSelector } from 'react-redux'
import useTrendingMovies from '../hooks/userTrendingMovies'
import useUpcomingMovies from '../hooks/useUpcomingMovies'


const Browse = () => {

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch)

  useNowPlayingMovies()
  usePopularMovies()
  useTrendingMovies()
  useUpcomingMovies()


  return (
    <div>
      <Header/>
      {
        showGptSearch ? <GptSearch/> : (<>
        <MainContainer/>
        <SecondaryContaineer/>
        </>)
      }
      
      
    </div>
  )
}

export default Browse
