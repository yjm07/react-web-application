import React from "react";
import PropTypes from "prop-types";

function Movie({year, title, genres, summary, poster}) {
    return (
        <div class="movie__movie">
            <h3 class="movie__title">{title} ({year})</h3>
            <img src={poster} alt={title} title={title} />
            <p class="movie__summary">{summary}</p>
        </div>
    );
}

Movie.prototype = {
    year: PropTypes.number,
    title: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    summary: PropTypes.string,
    poster: PropTypes.string
}

export default Movie;