import React, {Component} from 'react';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movies: []
        }
    }

    componentDidMount() {
        fetch('https://api.themoviedb.org/3/search/movie?api_key=e&language=en-US&query=titanic&page=1&include_adult=false')
            .then((response) => {
                return response.json();
            })
            .then((myJson) => {
                this.setState({movies: myJson.results});
            });
    }

    renderMovies = () => this.state.movies.map(function(movie){
        console.log('test');
        return <div key={movie.id}>{movie.title}</div>
    });

    render() {
        return (
            <div>
                {this.renderMovies()}
            </div>
        );
    }
}

export default Home;
