import MovieItem from "./MovieItems";


const MoviesList = (props) => {

    
    const list = props.list.map((movie) => {
        return <MovieItem key={movie.id} movie={movie} onDelete={ props.onDelete} />
    })
    
    return <ul>
        {list}
    </ul>
}

export default MoviesList;