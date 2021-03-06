import React, {Component} from 'react';
import MoviesInTheatre from './MoviesInTheatre';
import MovieFinder from './MovieFinder';

class MoviesPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: []
        }
    }

    render() {
        return (
            <div>
                <MovieFinder/>
                <MoviesInTheatre/>
            </div>
        );
    }
}

export default MoviesPage;
