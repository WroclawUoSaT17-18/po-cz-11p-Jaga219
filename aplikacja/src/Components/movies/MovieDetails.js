import React, {Component} from 'react';
import DetailsPage from './Details';

class MovieDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movieDetails: [],
        }
    }

    componentDidMount() {
        const movieId = this.props.match.params.id;

        fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=66eeb56ea4c4c8e8b9edbaaea76e7b7e&language=pl`)
            .then((response) => {
                return response.json();
            })
            .then((myJson) => {
                this.setState({movieDetails: myJson});
            });
    }


    render() {
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
