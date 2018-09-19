import React from "react";

class MovieForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      _id: "",
      title: "",
      director: "",
      imdbRating: "",
      hasOscars: false,
    };
  }

  genericUpdate(event) {
    // "event.target" is whatever tag you connected the event to
    // ("onChange" was put on the <input> tag)
    const { type, name, value, checked } = event.target;

    if (type === "checkbox") {
      this.setState({ [name]: checked });
    }
    else {
      this.setState({ [name]: value });
    }
  }

  handleSubmit(event) {
    // prevent the page reload of the form submission
    event.preventDefault();

    const { onMovieSubmit } = this.props;

    // call the "onMovieSubmit" FUNCTION PROP with the form information
    onMovieSubmit(this.state);
    // clear the form by setting the state back to the starting values
    this.setState({
      _id: "",
      title: "",
      director: "",
      imdbRating: "",
      hasOscars: false,
    });
  }

  render() {
    const { _id, title, director, imdbRating, hasOscars } = this.state;
    return (
      <section>
        <h3>Add a Movie</h3>

        <form onSubmit={event => this.handleSubmit(event)}>
          <label>
            ID:
            <input value={_id} onChange={event => this.genericUpdate(event)}
                type="text" name="_id" placeholder="10j" />
          </label>
          <br />

          <label>
            Title:
            <input value={title} onChange={event => this.genericUpdate(event)}
                type="text" name="title" placeholder="Titanic" />
          </label>
          <br />

          <label>
            Director:
            <input value={director} onChange={event => this.genericUpdate(event)}
                type="text" name="director" placeholder="James Cameron" />
          </label>
          <br />

          <label>
            IMDB Rating:
            <input value={imdbRating} onChange={event => this.genericUpdate(event)}
                type="number" name="imdbRating" placeholder="9" />
          </label>
          <br />

          <label>
            {/* checkbox inputs use "checked" instead of "value" */}
            <input checked={hasOscars} onChange={event => this.genericUpdate(event)}
                type="checkbox" name="hasOscars" />
            Oscar Winner?
          </label>
          <br />

          <button>Save This Movie</button>
        </form>
      </section>
    );
  }
}

export default MovieForm;
