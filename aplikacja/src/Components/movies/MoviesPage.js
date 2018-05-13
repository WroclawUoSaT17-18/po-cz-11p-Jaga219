import React, {Component} from 'react';
import MoviesInTheatre from './MoviesInTheatre';
import MoviesInput from './MovieInput';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: []
        }
    }

    render() {
        return (
            <div>
                <MoviesInput/>
                <MoviesInTheatre/>
            </div>
        );
    }
}

export default Home;
