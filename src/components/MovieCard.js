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

function MovieCard(props) {
  const { oneMovie, onMovieClick } = props;
  return (
    <li>
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

      {/* Call the PROP FUNCTION when the button is clicked */}
      <button onClick={onMovieClick}>
        Delete
      </button>
    </li>
  );
}

export default MovieCard;
