import axios from 'axios'

const AddMovie = (props) => {

    const submitHandler = async (e) => {
        e.preventDefault();
        const newMovie = {
            name: e.target.name.value
        }
        console.log(newMovie)
            
        // const result = await fetch('https://localhost:4000/movies/addMovie', {
        //     method: 'POST',
        //     body: JSON.stringify(newMovie), 
        //     headers: { 'Content-Type': 'application/json'}
        // })

        axios.post('http://localhost:4000/movies/addMovie', newMovie)
            .then(result => {
                props.movieAdded();
                console.log(result)
            })
        .catch(err=>console.log(err))

        e.target.name.value = '';
    }

    return <form onSubmit={submitHandler}>
        <label htmlFor='name'>name</label>
        <input id='name' name='name' placeholder='movie name' />
        <button type='submit'> submit</button>
    </form>
}
export default AddMovie;