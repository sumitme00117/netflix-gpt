import { useEffect } from "react"
import { API_OPTIONS } from "../utils/constants"
import { addTrailerVideo } from "../utils/moviesSlice"
import { useDispatch } from "react-redux"


const useMovieTrailer = (movieId) => {
    // fetching trailer video & updating the store

    const dispatch = useDispatch()
    const getMovieVideos = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS)

        const json = await data.json()

        const filterData = json.results.filter((video) => video.type === "Trailer")
        const trailer = filterData.length ? filterData[0] : json.reesults[0]
        console.log(trailer)
        dispatch(addTrailerVideo(trailer))
    }

    useEffect(()=>{
        getMovieVideos()
    }, [])
}

export default useMovieTrailer