import React, {Component} from 'react';

class MovieBlock extends Component {

    render() {
        const details = this.props.details;
        const releaseYear = details.release_date.split('-')[0];

        return (
            <div>
                <div
                    style={{
                        display: 'inline-block',
                        background: '#FFF',
                        width: '100%',
                        margin: '0px 25px 25px 0px',
                        boxShadow: '0 2px 8px #0000001a',

                    }}
                >
                    <img style={{display: 'inherit'}}
                         src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${details.poster_path}`}
                         alt={details.title}/>

                    <div style={{
                        display: 'inherit',
                        verticalAlign: 'top'
                    }}
                    >
                        <h2 >{details.title} (<i>{releaseYear}</i>)</h2>
                        <h3>Ocena: {details.vote_average}</h3>
                        <p>Tytuł oryginalny: {details.original_title}</p>
                        <p>Czas trwania: {details.runtime}</p>
                    </div>
                </div>
                <p>{details.overview}</p>
            </div>
        );
    }
}

export default MovieBlock;
