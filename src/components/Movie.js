import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import "./Movie.css"

function Movie({id, year, title, summary, poster, genres}) {
    return (
        <Link to={{
            pathname: `/movie/${id}`,
            state: {
                year,
                title,
                summary,
                poster,
                genres
            }
        }}>
            <div className="movie">
                <img src={poster} alt={title} title={title} />
                <div className="movie__data">
                    <h3 className="movie__title">{title}</h3>
                    <h5 className="movie__year">{year}</h5>
                    <ul className="movie__genres">
                        {genres.map((genre, index) => (
                            <li key={index} className="genres__genre">
                                {genre}
                            </li>
                        ))}
                    </ul>
                    <p className="movie__summary">
                        {summary.length > 200 
                        ? summary.slice(0, 200) + '...'
                        : summary}
                    </p>
                </div>
            </div>
        </Link>
    );
}

Movie.propTypes = {
    year: PropTypes.number,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string,
    poster: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
}

export default Movie;