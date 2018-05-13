import React, { Component } from 'react';
import { AutoComplete } from 'antd';
import { withRouter } from 'react-router'
import debounce from 'lodash.debounce'

class MovieFinder extends Component {
    state = {
        dataSource: [],
    };

    fetchSuggestions = (value) => {
        fetch(`https://api.themoviedb.org/3/search/tv?api_key=66eeb56ea4c4c8e8b9edbaaea76e7b7e&language=pl&query=${value}&page=1`)
            .then((response) => {
                return response.json();
            })
            .then((myJson) => {
                const { results } = myJson;
                if (results) {
                    this.setState({dataSource: results});
                } else {
                    this.setState({dataSource: []});
                }
            });
    };

    onSelect = (value) => {
        this.props.history.push(`/series/${value}`)
    };

    render() {
        const { dataSource } = this.state;

        const options = dataSource
            .reduce((prev, curr) => (
                prev.concat({ text: `${curr.name} (${curr.first_air_date.split('-')[0]})`, value: curr.id })
            ), []);

        return (
            <AutoComplete
                dataSource={options}
                style={{ width: '100%' }}
                onSelect={this.onSelect}
                onSearch={debounce(this.fetchSuggestions, 300)}
                placeholder="Wyszukaj Serial"
            />
        );
    }
}

export default withRouter(MovieFinder)

