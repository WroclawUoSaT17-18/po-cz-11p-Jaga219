import React, {Component} from 'react';
import MovieBlock from './MovieBlock';

class MoviesInTheatre extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: []
        }
    }

    componentDidMount() {
        const currentDate = new Date();

        const dateMonthAgoMonthAgoInMiliSecounds = currentDate.setDate(currentDate.getDate()-30);
        const dateInMonthInMiliSecounds = currentDate.setDate(currentDate.getDate()+30);

        const dateMonthAgo = new Date(dateMonthAgoMonthAgoInMiliSecounds).toISOString().substr(0, 11);
        const dateInMonth = new Date(dateInMonthInMiliSecounds).toISOString().substr(0, 11);
        const server = 'https://api.themoviedb.org/3/discover/movie?api_key=66eeb56ea4c4c8e8b9edbaaea76e7b7e';

        fetch(`${server}&language=pl&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=${dateMonthAgo}&primary_release_date.lte=${dateInMonth}`)
            .then((response) => {
                return response.json();
            })
            .then((myJson) => {
                this.setState({movies: myJson.results});
            });
    }

    render() {
        return (
            <div>
                <h2>Obecnie w kinach</h2>
                <MovieBlock
                    movies={this.state.movies}
                />
            </div>
        );
    }
}

export default MoviesInTheatre;
