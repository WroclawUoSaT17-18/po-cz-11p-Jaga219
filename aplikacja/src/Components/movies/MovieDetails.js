import React, {Component} from 'react';
import DetailsPage from '../common/DetailsPage';

class MovieDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movieDetails: [],
            movieId: ''
        }
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log(nextState)
    //     return this.state.value != nextState.value;
    // }

    componentDidMount() {
        const server = 'https://api.themoviedb.org/3/discover/movie?api_key=66eeb56ea4c4c8e8b9edbaaea76e7b7e';
        const movieId = this.props.match.params.id;
        console.log(movieId)

        fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=66eeb56ea4c4c8e8b9edbaaea76e7b7e&language=pl`)
            .then((response) => {
                return response.json();
            })
            .then((myJson) => {
                this.setState({movieDetails: myJson});
            });
    }


    render() {
        console.log(this.state.movieDetails)
        const { movieDetails } = this.state;
        return (
            <div>
                {movieDetails.hasOwnProperty('id') && <DetailsPage
                    details={movieDetails}
                />}
            </div>
        );
    }
}

export default MovieDetails;
