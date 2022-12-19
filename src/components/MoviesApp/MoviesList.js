


const MoviesList = (props) => {

    const list = props.list.map((movie) => {
        return <li key={movie.id}>
            <p>{ movie.name}</p>
        </li>
    })
    
    return <ul>
        {list}
    </ul>
}

export default MoviesList;