import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class SeriesBlock extends Component {
    renderMovies = (series) => series.map(function (tv) {
        return <div
            style={{
                display: 'inline-flex',
                background: '#FFF',
                width: '430px',
                margin: '0px 25px 25px 0px',
                boxShadow: '0 2px 8px #0000001a',

            }}
            key={tv.id}
        >
            <Link to={`/series/${tv.id}`}>
                <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${tv.poster_path}`} alt={tv.name}/>
            </Link>
            <span>{tv.name}</span>
        </div>
    });

    render() {
        const popularSeries = this.props.popularSeries;

        return (
            <div style={{justifyContent: ''}}>
                {this.renderMovies(popularSeries)}
            </div>
        );
    }
}

export default SeriesBlock;
