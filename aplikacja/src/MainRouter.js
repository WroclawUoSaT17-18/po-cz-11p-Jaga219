import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import Layout from 'antd/lib/layout';
import Menu from 'antd/lib/menu';
import Breadcrumb from 'antd/lib/breadcrumb';
import Home from './Components/Home';
import createBrowserHistory from 'history/createBrowserHistory';

const { Header, Footer, Content } = Layout;
const history = createBrowserHistory();

const Main = () => (
    <Router history={history}>
        <div>
            <main>
                <Layout className='layout'>
                    <Header>
                        <div className='logo' />
                        <Menu
                            theme='light'
                            mode='horizontal'
                            defaultSelectedKeys={['2']}
                            style={{ lineHeight: '64px' }}
                        >
                            <Menu.Item key='1'>nav 1</Menu.Item>
                            <Menu.Item key='2'>nav 2</Menu.Item>
                            <Menu.Item key='3'>nav 3</Menu.Item>
                        </Menu>
                    </Header>
                    <Content style={{ padding: '0 50px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                            <Switch>
                                <Route exact path='/' component={Home}/>
                                {/*<Route path='/roster' component={Roster}/>*/}
                                {/*<Route path='/schedule' component={Schedule}/>*/}
                            </Switch>
                        </div>
                    </Content>

                    <Footer style={{ textAlign: 'center' }}>
                        Ant Design ©2016 Created by Ant UED
                    </Footer>
                </Layout>
            </main>
        </div>
    </Router>
);

export default Main;