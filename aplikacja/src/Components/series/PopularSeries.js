import React, {Component} from 'react';
import SeriesBlock from './SeriesBlock';

class PopularSeries extends Component {
    constructor(props) {
        super(props);
        this.state = {
            popularSeries: []
        }
    }

    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/tv/popular?api_key=66eeb56ea4c4c8e8b9edbaaea76e7b7e&language=pl&page=1}`)
            .then((response) => {
                return response.json();
            })
            .then((myJson) => {
                this.setState({popularSeries: myJson.results});
            });
    }

    render() {
        return (
            <div>
                <h2>Popularne Seriale</h2>
                <SeriesBlock
                    popularSeries={this.state.popularSeries}
                />
            </div>
        );
    }
}

export default PopularSeries;
