import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContaineer from './SecondaryContaineer'


const Browse = () => {

  useNowPlayingMovies()


  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContaineer/>
    </div>
  )
}

export default Browse
