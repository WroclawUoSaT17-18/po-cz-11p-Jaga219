import React, {Component} from 'react';

class MovieBlock extends Component {
    renderMovies = (movies) => movies.map(function(movie){
        return <div
            key={movie.id}
        >
            <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${movie.poster_path}`} alt=""/>
            <span>{movie.title}</span>
            </div>
    });

    render() {
        const movies =this.props.movies;

        return (
            <div>
                {this.renderMovies(movies)}
            </div>
        );
    }
}

export default MovieBlock;
