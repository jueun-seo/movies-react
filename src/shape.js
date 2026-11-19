export function shape(movie, genres) {
    const { id, title, poster_path, genre_ids, vote_average, release_date } = movie

    return {
        id,
        title,
        poster_path,
        vote_average: vote_average.toFixed(1),
        release_date,
        genres: genre_ids.map(gid => genres.find(g => g.id == gid)?.name)
    }
}
