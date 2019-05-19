import React, { Component } from 'react';
import { Layout } from 'antd';
import TopMenu from '../components/Menu/TopMenu';
import LinkMenu from '../components/Menu/LinkMenu';
import SideMenu from '../components/Menu/SideMenu';

const {
  Content, Footer
} = Layout;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  };

  render() {
    return (
      <Layout>
        <TopMenu></TopMenu>
        <Content style={{ padding: '0 50px' }}>
          <LinkMenu></LinkMenu>
          <Layout style={{ padding: '24px 0', background: '#fff' }}>
            <SideMenu></SideMenu>
            <Content style={{ padding: '0 24px', minHeight: 280 }}>
              Content
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          @ KUMISAKI
      </Footer>
      </Layout>
    )
  }
}
export default Home;