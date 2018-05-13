import React, {Component} from 'react';
import { Link } from 'react-router-dom';


class MovieBlock extends Component {
    renderMovies = (movies) => movies.map(function (movie) {
        return <div
            style={{
                display: 'inline-flex',
                background: '#FFF',
                width: '430px',
                margin: '0px 25px 25px 0px',
                boxShadow: '0 2px 8px #0000001a',

            }}
            key={movie.id}
        >
            <Link to={`/movie/${movie.id}`}>
                <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${movie.poster_path}`} alt={movie.title}/>
            </Link>
            <span>{movie.title}</span>
        </div>
    });

    render() {
        const movies = this.props.movies;

        return (
            <div style={{justifyContent: ''}}>
                {this.renderMovies(movies)}
            </div>
        );
    }
}

export default MovieBlock;
