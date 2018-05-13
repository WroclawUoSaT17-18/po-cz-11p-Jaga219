import React, { Component } from 'react';
import { AutoComplete } from 'antd';
import { withRouter } from 'react-router'
import debounce from 'lodash.debounce'

class MovieFinder extends Component {
    state = {
        dataSource: [],
    };

    fetchSuggestions = (value) => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=66eeb56ea4c4c8e8b9edbaaea76e7b7e&language=pl&query=${value}&page=1&include_adult=false`)
            .then((response) => {
                return response.json();
            })
            .then((myJson) => {
                const { results } = myJson;
                this.setState({dataSource: results});
            });
    };

    onSelect = (value) => {
        this.props.history.push(`/movie/${value}`)
    };

    render() {
        const { dataSource } = this.state;

        const options = dataSource
            .reduce((prev, curr) => (
                prev.concat({ text: `${curr.title} (${curr.release_date.split('-')[0]})`, value: curr.id })
            ), []);

        return (
            <AutoComplete
                dataSource={options}
                style={{ width: '100%' }}
                onSelect={this.onSelect}
                onSearch={debounce(this.fetchSuggestions, 500)}
                placeholder="Wyszukaj Film"
            />
        );
    }
}

export default withRouter(MovieFinder)

