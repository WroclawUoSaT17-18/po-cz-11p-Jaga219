import React from 'react';
import { Router, Switch, Route, Link } from 'react-router-dom';
import Layout from 'antd/lib/layout';
import Menu from 'antd/lib/menu';
import Breadcrumb from 'antd/lib/breadcrumb';
import Home from './Pages/Home';
import createBrowserHistory from 'history/createBrowserHistory';

const { Header, Footer, Content } = Layout;
const history = createBrowserHistory();

const Main = () => (
    <Router history={history}>
        <div>
            <Layout className='layout' style={{ minHeight: '100vh'}}>
                <Header style={{ padding: '0'}}>
                    {/*<img src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" alt="" width={'20'}/>*/}
                    <Menu
                        theme='light'
                        mode='horizontal'
                        defaultSelectedKeys={['1']}
                        style={{ lineHeight: '64px', padding: '0'}}
                    >
                        <Menu.Item key='1'>
                            <Link to="/movies" className="nav-text">Filmy</Link>
                        </Menu.Item>
                        <Menu.Item key='2'>Odkrywanie</Menu.Item>
                        {/*<Menu.Item key='3'>nav 3</Menu.Item>*/}
                    </Menu>
                </Header>
                <Content style={{ padding: '0 50px', background: '#F0A7DC' }} >
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{ background: '#FFF', padding: 24, minHeight: 600 }}>
                        <Switch>
                            <Route exact path='/' component={Home}/>
                            <Route path='/movies' component={Home}/>
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