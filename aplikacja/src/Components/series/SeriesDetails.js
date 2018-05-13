import React, {Component} from 'react';
import Details from '../series/Details';

class SeriesDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seriesDetails: [],
        }
    }

    componentDidMount() {
        const seriesId = this.props.match.params.id;

        fetch(`https://api.themoviedb.org/3/tv/${seriesId}?api_key=66eeb56ea4c4c8e8b9edbaaea76e7b7e&language=pl`)
            .then((response) => {
                return response.json();
            })
            .then((myJson) => {
                this.setState({seriesDetails: myJson});
            });
    }


    render() {
        const { seriesDetails } = this.state;
        return (
            <div>
                {seriesDetails.hasOwnProperty('id') && <Details
                    details={seriesDetails}
                />}
            </div>
        );
    }
}

export default SeriesDetails;
