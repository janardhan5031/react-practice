import React, { useState,useEffect } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';

import MoviesList from './MoviesList';
import AddMovie from './addMovies';

const MoviesApp = () => {
    // const list = [{ id: 'sdjkf', name: 'jani' }];
    const [list, setList] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setError] = useState(null)
    const [isMovieAdded, setIsMovieAdded] = useState(false)
    const [onLoading,setOnLoading] = useState(true)

    const buttonHandler = async () => {
        setIsLoading(true)
        setError(null)
        console.log('clicked')
        try {
            axios.get('http://localhost:4000/movies/getall')
                .then(response => {
                    console.log(response)
                    setList(response.data)
                })
            .catch(err=>console.log(err))

        } catch (err) {
            setError(err.message)
        }
        setIsLoading(false)
    }
    console.log('before')
    useEffect(() => {
        console.log('after')
        if (onLoading || isMovieAdded) {
            buttonHandler()
            setOnLoading(false)
            setIsMovieAdded(false)
        }
        
    }, [onLoading, isMovieAdded])
    
    function movieAdded() {
        setIsMovieAdded(true)
    }

    return <div style={{ display: 'flex', gap:'5em' }}>
        <div style={{border:'1px solid yellow',width:'40%'}}>
            <Button onClick={buttonHandler}>Get the list</Button>
            {!isLoading && list.length && <MoviesList list={list} onDelete={buttonHandler} />}
            {!isLoading && !list.length && !isError && <h3>movies not found in list</h3>}
            {!isLoading && isError && <p>{isError}</p>}
            {isLoading && <p>Loading ...</p>}
        </div>

        <div style={{border:'1px solid red',width:'50%'}}>
            <AddMovie movieAdded={ movieAdded} />
        </div>

    </div>

}

export default MoviesApp;