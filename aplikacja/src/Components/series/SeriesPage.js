import React, {Component} from 'react';
import SeriesFinder from './SeriesFinder';
import PopularSeries from './PopularSeries';

class SeriesPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: []
        }
    }

    render() {
        return (
            <div>
                <SeriesFinder/>
                <PopularSeries/>
            </div>
        );
    }
}

export default SeriesPage;
