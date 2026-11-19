import MovieCard from './MovieCard.jsx'
import { tmdb } from "./api.js"
import { useState, useEffect } from 'react'

function App() {
    const [movies, setMovies] = useState([])
    const [genreMap, setGenreMap] = useState({})
    const [error, setError] = useState(null)

    useEffect(() => {
        async function load() {
            try {
                const [nowPlaying, genreList] = await Promise.all([
                    tmdb('/movie/now_playing?language=ko-KR'),
                    tmdb('/genre/movie/list?language=ko-KR'),
                ])
                setMovies(nowPlaying.results)
                setGenreMap(
                    Object.fromEntries(genreList.genres.map((g) => [g.id, g.name]))
                )
            } catch (e) {
                setError(e.message)
            }
        }
        load()
    }, [])

    if (error) return <p>{ error }</p>

    return (
        <>
            <div id="cards">
                { movies.map((m) =>
                    <MovieCard
                        key = { m.id }
                        title = { m.title }
                        poster = { m.poster_path ? `https://image.tmdb.org/t/p/w342${m.poster_path}` : '' }
                        genres = { m.genre_ids.map((id) => genreMap[id]).filter(Boolean) }
                        rating = { m.vote_average.toFixed(1) }
                        date = { m.release_date }
                    />
                )}
            </div>
        </>
    )
}

export default App
