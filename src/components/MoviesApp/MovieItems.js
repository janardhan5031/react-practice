import axios from 'axios';
import { Button } from "react-bootstrap";

const MovieItem = (props) => {
    
    const deleteMovie = () => {
        // console.log(props.movie)
        axios.post('http://localhost:4000/movies/deleteMovie', { id: props.movie.id })
            .then(result => {
                console.log(result);
                props.onDelete()
            })
            .catch(err => console.log(err))
    }

    return <li key={props.movie.id}>
        <p>{props.movie.name}  <Button variant='danger' onClick={deleteMovie}>delete</Button></p>

    </li>
}

export default MovieItem;
