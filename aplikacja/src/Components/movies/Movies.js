import React, {Component} from 'react';
import MoviesInTheatre from './MoviesInTheatre';

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
                <MoviesInTheatre/>
            </div>
        );
    }
}

export default Home;
