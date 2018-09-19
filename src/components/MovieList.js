import React from "react";

import MovieCard from "./MovieCard.js";
import MovieForm from "./MovieForm.js";


class MovieList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      oscarsOnly: false,
      movies: [
        {
          _id: "7g",
          title: "The Godfather",
          director: "Francis Coppola",
          imdbRating: 9.2,
          hasOscars: true,
        },
        {
          _id: "8h",
          title: "Star Wars",
          director: "George Lucas",
          imdbRating: 8.7,
          hasOscars: true,
        },
        {
          _id: "9i",
          title: "The Shawshank Redemption",
          director: "Frank Darabont",
          imdbRating: 9.3,
          hasOscars: false,
        },
      ],
    };
  }

  deleteMovie(movieIndex) {
    const { movies } = this.state;
    movies.splice(movieIndex, 1);

    // tell React to update the DOM with setState()
    this.setState({ movies });
  }

  toggleOscarsOnly() {
    const { oscarsOnly } = this.state;
    // set the state to the opposite boolean
    this.setState({
      oscarsOnly: !oscarsOnly
    });
  }

  addNewMovie(movie) {
    const { movies } = this.state;
    movies.unshift(movie);
    this.setState({ movies });
  }

  render() {
    const { movies, oscarsOnly } = this.state;
    return (
      <section>
        <h2>Movie List</h2>

        <MovieForm onMovieSubmit={(newMovie) => this.addNewMovie(newMovie)} />

        <button onClick={() => this.toggleOscarsOnly()}>
          Show {oscarsOnly ? "All Films" : "Oscar Winners Only"}
        </button>

        <ul>
          {movies.map((oneMovie, index) =>
            // show the <MovieCard /> if "oscarsOnly" is OFF
            // -OR- if "oscarsOnly" is ON and the movie has Oscars
            (!oscarsOnly || oneMovie.hasOscars) &&
              <MovieCard key={oneMovie._id}
                oneMovie={oneMovie}
                onMovieClick={() => this.deleteMovie(index)} />
          )}
        </ul>
      </section>
    );
  }
}

export default MovieList;
