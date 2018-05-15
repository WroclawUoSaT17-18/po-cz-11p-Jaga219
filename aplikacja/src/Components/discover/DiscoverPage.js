import React, {Component} from 'react';
import SortBy from './filters/SortBy'
import Year from './filters/Year'
import Genres from './filters/Genres';
import MovieBlock from '../movies/MovieBlock';

class DiscoverPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            sortBy: 'popularity.desc',
            year: 'year.2018',
            genres: ''
        }
    }

    componentDidMount(){
        this.fetchSuggestions();
    }

    fetchSuggestions = () => {
        const { sortBy, year, genres} = this.state;
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=66eeb56ea4c4c8e8b9edbaaea76e7b7e&language=pl&sort_by=${sortBy}&include_adult=false&include_video=false&page=1&with_genres=${genres}&year=${year}`)
            .then((response) => {
                return response.json();
            })
            .then((myJson) => {
                const { results } = myJson;
                if (results) {
                    this.setState({movies: results});
                } else {
                    this.setState({movies: []});
                }
            });
    };


    onYearChange = (value) => {
        this.setState({
            year: value
        });
        this.fetchSuggestions();
    };

    sortByChange = (value) => {
        this.setState({
            sortBy: value
        });
        this.fetchSuggestions();
    };

    onGenreChange = (value) => {
        this.setState({
            sortBy: value
        });
        this.fetchSuggestions();
    };

    render() {
        return (
            <div>
                <h2>Odkryj nowe filmy</h2>
                <Year
                    onYearChange={this.onYearChange}
                />
                <SortBy
                    onSortByChange={this.sortByChange}
                />
                <Genres
                    onGenreChange={this.onGenreChange}
                />
                <MovieBlock
                    movies={this.state.movies}
                />
            </div>
        );
    }
}

export default DiscoverPage;
