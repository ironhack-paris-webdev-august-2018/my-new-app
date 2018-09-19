import React from "react";

function longAwardText(movie) {
  if (!movie.hasOscars) {
    return <p>Great movie but no Oscars. Rating is {movie.imdbRating}.</p>;
  }
  else if (movie.imdbRating >= 9) {
    return <p>🤯 Amazing film! Won oscars and has a rating of {movie.imdbRating}.</p>;
  }
  else if (movie.imdbRating >= 7) {
    return <p>😲 Got Oscars and has a respectable rating of {movie.imdbRating}.</p>
  }
}

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

  render() {
    const { movies, oscarsOnly } = this.state;
    return (
      <section>
        <h2>Movie List</h2>
        <button onClick={() => this.toggleOscarsOnly()}>
          Show {oscarsOnly ? "All Films" : "Oscar Winners Only"}
        </button>

        <ul>
          {movies.map((oneMovie, index) =>
            // show the <li> if "oscarsOnly" is OFF
            // -OR- if "oscarsOnly" is ON and the movie has Oscars
            (!oscarsOnly || oneMovie.hasOscars) &&
              <li key={oneMovie._id}>
                <h3>{oneMovie.title}</h3>
                <p>Directed by {oneMovie.director}</p>

                {oneMovie.hasOscars ? (
                  <p>Oscar Winning Film 🏆</p>
                ) : (
                  <p>Great film, but no Oscars. 😟</p>
                )}

                {oneMovie.imdbRating < 4 &&
                  <p>This movie is 💩.</p>}

                {longAwardText(oneMovie)}

                <button onClick={() => this.deleteMovie(index)}>
                  Delete
                </button>
              </li>
          )}
        </ul>
      </section>
    );
  }
}

export default MovieList;
