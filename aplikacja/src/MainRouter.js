import React from 'react';
import { Router, Switch, Route, Link, Redirect  } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Layout from 'antd/lib/layout';
import Menu from 'antd/lib/menu';
import MoviesPage from './Components/movies/MoviesPage';
import SeriesPage from './Components/series/SeriesPage';
import MovieDetails from './Components/movies/MovieDetails';
import SeriesDetails from './Components/series/SeriesDetails';
import DiscoverPage from './Components/discover/DiscoverPage';
import { withRouter } from "react-router-dom";

const { Header, Footer, Content } = Layout;
const history = createBrowserHistory();

class Main extends React.Component {

    handleMenuClick = ({key}) => {
        switch (key) {
            case '1':
                this.props.history.push('/movies');
                break;
            case '2':
                this.props.history.push('/discover');
                break;
            case '3':
                this.props.history.push('/series');
                break;
            default:
                break
        }
    };

    render() {
        return (
            <Router history={history}>
                <div>
                    <Layout className='layout' style={{ minHeight: '100vh'}}>
                        <Header style={{ padding: '0'}}>
                            <Menu
                                theme='light'
                                onClick={ this.handleMenuClick }
                                mode='horizontal'
                                defaultSelectedKeys={['1']}
                                style={{ lineHeight: '64px', padding: '0'}}
                            >
                                <Menu.Item key='1'>
                                    <Link to="/movies" className="nav-text">Filmy</Link>
                                </Menu.Item>
                                <Menu.Item key='2'>
                                    <Link to="/discover" className="nav-text">Odkrywanie</Link>
                                </Menu.Item>
                                <Menu.Item key='3'>
                                    <Link to="/series" className="nav-text">Seriale</Link>
                                </Menu.Item>
                            </Menu>
                        </Header>
                        <Content style={{ padding: '0 50px', background: '#F0A7DC' }} >
                            <div style={{ background: '#EEE', padding: 24, minHeight: 600 }}>
                                <Switch>
                                    <Route exact path='/movies' component={MoviesPage}/>
                                    <Route exact path='/movie/:id' component={MovieDetails}/>
                                    <Route path='/discover' component={DiscoverPage}/>
                                    <Route exact path='/series' component={SeriesPage}/>
                                    <Route exact path='/series/:id' component={SeriesDetails}/>
                                    <Redirect to="/movies"/>
                                </Switch>
                            </div>
                        </Content>

                        <Footer style={{ textAlign: 'center', background: '#F0A7DC' }}>
                            Footer
                        </Footer>
                    </Layout>
                </div>
            </Router>
        )
    }
}

export default withRouter(Main);