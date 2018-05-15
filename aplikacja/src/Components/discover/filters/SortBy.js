import React, {Component} from 'react';
import { Select } from 'antd';

const Option = Select.Option;

class SortBy extends Component {

    render() {
        return (
            <div>
                <Select defaultValue="popularity.desc" style={{ width: 200 }} onChange={this.props.onSortByChange}>
                    <Option value="popularity.desc">Popularność malejąco</Option>
                    <Option value="popularity.asc">Popularność rosnąco</Option>
                    <Option value="release_date.desc">Data wydania malejąco</Option>
                    <Option value="release_date.asc">Data wydania rosnąco</Option>
                </Select>
            </div>
        );
    }
}

export default SortBy;
