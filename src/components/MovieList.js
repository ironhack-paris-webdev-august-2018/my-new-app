import React from "react";

class MovieList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [
        { _id: "7g", title: "The Godfather", director: "Francis Coppola" },
        { _id: "8h", title: "Star Wars", director: "George Lucas" },
        { _id: "9i", title: "The Shawshank Redemption", director: "Frank Darabont" },
      ],
    };
  }

  deleteMovie(movieIndex) {
    const { movies } = this.state;
    movies.splice(movieIndex, 1);

    // tell React to update the DOM with setState()
    this.setState({ movies });
  }

  render() {
    const { movies } = this.state;
    return (
      <section>
        <h2>Movie List</h2>
        <ul>
          {movies.map((oneMovie, index) =>
            <li key={oneMovie._id}>
              <h3>{oneMovie.title}</h3>
              <p>Directed by {oneMovie.director}</p>
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
