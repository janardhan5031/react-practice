import React, { useState } from 'react';
import { Button } from 'react-bootstrap'

import MoviesList from './MoviesList';


const MoviesApp = () => {
    // const list = [{ id: 'sdjkf', name: 'jani' }];
    const [list, setList] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setError] = useState(null)

    const buttonHandler = async () => {
        setIsLoading(true)
        setError(null)
        console.log('clicked')
        try {
            const response = await fetch('https://swapi.py4e.com/api/fils/')
            // if response is not ok or has error inside of it
            if (!response.ok) {
                throw new Error('somethig went wrong ... retrying')
            } // then remaing code will not be work if error found in response that will handle by catch block

            const data = await response.json();
            const moviesList = data.results.map((ele) => {
                return {
                    id: ele.episode_id,
                    name: ele.title
                }
            })

            setList(moviesList)
        } catch(err) {
            setError(err.message)
        }
        setIsLoading(false)
    }

    return <>
        <Button onClick={buttonHandler}>Get the list</Button>
        {!isLoading && list.length  && <MoviesList list={list} />}
        {!isLoading && !list.length && !isError && <h3>movies not found in list</h3>}
        {!isLoading && isError && <p>{isError}</p>}
        {isLoading && <p>Loading ...</p>}

    </>

}

export default MoviesApp;