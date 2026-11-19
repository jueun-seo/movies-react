function MovieCard({title, poster_path, genres, vote_average, release_date}) {
    return (
        <div className = "card">
            <img src= { `https://image.tmdb.org/t/p/w300${poster_path}` } alt={title} />
            <h3>{ title }</h3>
            <p>{ vote_average }, { release_date }</p>
            <p>{ genres.join(' / ') }</p>
        </div>
    )
}

export default MovieCard