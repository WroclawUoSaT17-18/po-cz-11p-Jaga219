import React, {Component} from 'react';
import { Select } from 'antd';

const Option = Select.Option;

class SeriesPage extends Component {

    render() {
        return (
            <div>
                <Select defaultValue="2018" style={{ width: 120 }} onChange={this.props.onYearChange}>
                    <Option value="none">Wszystkie</Option>
                    <Option value="2018">2018</Option>
                    <Option value="2017">2017</Option>
                    <Option value="2016">2016</Option>
                    <Option value="2015">2015</Option>
                    <Option value="2014">2014</Option>
                    <Option value="2013">2013</Option>
                    <Option value="2012">2012</Option>
                    <Option value="2011">2011</Option>
                </Select>
            </div>
        );
    }
}

export default SeriesPage;
