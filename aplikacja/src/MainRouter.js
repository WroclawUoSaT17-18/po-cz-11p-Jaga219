import React from 'react';
import { Router, Switch, Route, Link, Redirect  } from 'react-router-dom';
import Layout from 'antd/lib/layout';
import Menu from 'antd/lib/menu';
import MoviesPage from './Components/movies/MoviesPage';
import createBrowserHistory from 'history/createBrowserHistory';

const { Header, Footer, Content } = Layout;
const history = createBrowserHistory();

const Main = () => (
    <Router history={history}>
        <div>
            <Layout className='layout' style={{ minHeight: '100vh'}}>
                <Header style={{ padding: '0'}}>
                    <Menu
                        theme='light'
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
                    <div style={{ background: '#FFF', padding: 24, minHeight: 600 }}>
                        <Redirect to="/movies"/>
                        <Switch>
                            <Route exact path='/movies' component={MoviesPage}/>
                            {/*<Route path='/schedule' component={Schedule}/>*/}
                        </Switch>
                    </div>
                </Content>

                <Footer style={{ textAlign: 'center', background: '#F0A7DC' }}>
                    Footer
                </Footer>
            </Layout>
        </div>
    </Router>
);

export default Main;