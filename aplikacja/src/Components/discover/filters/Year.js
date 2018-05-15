import React, {Component} from 'react';
import { Select } from 'antd';

const Option = Select.Option;

class SeriesPage extends Component {

    render() {
        return (
            <div>
                <Select defaultValue="year.2018" style={{ width: 100 }} onChange={this.props.onYearChange}>
                    <Option value="year.none">Brak</Option>
                    <Option value="year.2018">2018</Option>
                    <Option value="year.2017">2017</Option>
                    <Option value="year.2016">2016</Option>
                    <Option value="year.2015">2015</Option>
                    <Option value="year.2014">2014</Option>
                </Select>
            </div>
        );
    }
}

export default SeriesPage;
