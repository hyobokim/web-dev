import React, {useEffect, useState} from "react";

let MOVIE_API;

if (process.env.NODE_ENV === 'development') {
  MOVIE_API = 'http://localhost:4000/api/movies';
}
else {
  MOVIE_API = 'https://web-dev-2021.herokuapp.com';
}

const MovieApiClient = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() =>
          fetch(MOVIE_API) // retrieve data from "api/movies"
          .then(response => response.json())  // parse into json object
          .then(movies => setMovies(movies))  // set movies value to be the json object
      , []);    // don't force re-render because state changed

  const [movie, setMovie] = useState({id_: new Date().getMilliseconds().toString(), title: '', rating: 2.5}); // initialize state
  const onMovieTitleChange = (event) =>   // handle movie title input field change
      setMovie({...movie, title: event.target.value});    // update title
  const createMovieClickHandler = () =>
      // handle create movie click event
      fetch(MOVIE_API, {   // use HTTP post
        method: 'POST',     // embed movie in message body as string
        body: JSON.stringify(movie),    // tell server string is formatted
        headers: {    // as JSON
          'content-type': 'application/json'
        }
      })
      .then(response => response.json())    // parse movies as JSON array from server
      .then(movies => setMovies(movies));   // response and update local movies array copy


  const deleteMovie = (movie) =>    // handle delete button mouse click
      fetch(`${MOVIE_API}/${movie._id}`, {  // fetch movies from API on server
        method: 'DELETE'  // use delete HTTP method
      })
      .then(response => response.json())  // parse JSON response from server
      .then(movies => setMovies(movies)); // set local movies with movies from server


  const saveMovie = () =>
      fetch(`${MOVIE_API}/${movie._id}`, {
        method: 'PUT',
        body: JSON.stringify(movie),
        headers: {
          'content-type': 'application/json'
        }
      })


  return(
      <div>
        <h2>Movies</h2>
        <ul className="list-group">
          {
            movies.map((movie) =>
                <li className="list-group-item"
                    key={movie._id}>
                  {movie.title} {movie.rating}
                  <button onClick={() => deleteMovie(movie)}
                          className="btn btn-danger float-end">
                    Delete
                  </button>
                  <button onClick={() => setMovie(movie)}
                          className="btn btn-primary float-end ms-2">
                    Edit
                  </button>
                </li>
            )
          }
          <li className="list-group-item">
            <input className="form-control"     // field to input title
                   value={movie.title}
                   onChange={onMovieTitleChange}
                   style={{width: "70%"}}/>
            <button
                onClick={saveMovie}
                className="btn btn-primary ms-2 float-end">
              Save
            </button>
            <button       // create movie button
                onClick={createMovieClickHandler}
                className="btn btn-success float-end">
              Create
            </button>
          </li>
        </ul>
      </div>
  )
};
export default MovieApiClient;
