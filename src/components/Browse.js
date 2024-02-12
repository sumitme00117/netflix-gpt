import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContaineer from './SecondaryContaineer'
import usePopularMovies from '../hooks/usePopularMovies'


const Browse = () => {

  useNowPlayingMovies()
  usePopularMovies()


  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContaineer/>
    </div>
  )
}

export default Browse
