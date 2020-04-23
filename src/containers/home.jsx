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
      content:['一个不务正业的咸鱼程序猿的个人网站','建设缓慢','被疫情耽搁的准留学生','分享一些自己的旅行，和一些笔记'],
      photoes:['','','']
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
              <div
                onDrop={(e)=>{ e.preventDefault(); console.log('>>> target',e.target)}}
                onDragOver={(e)=>{ e.preventDefault() }}
              >
                {
                  this.state.content.map(item=>{
                    return <div
                      onDrag={(e)=>{console.log('>>> item',e.target)}}
                      draggable={true}
                    >
                      {item}
                    </div>
                  })
                }
              </div>
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          @ KUMISAKI  鲁 ICP 备 18010648 号 - 1
      </Footer>
      </Layout>
    )
  }
}
export default Home;