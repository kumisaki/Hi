import React, { Component } from 'react';
import { Menu, Layout } from 'antd';

const {
  Header
} = Layout;

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      menu:[{
        title:'首页',
        key:'home',
      },{
        title:'图册',
        key:'tech',
      },{
        title:'笔记',
        key:'den',
      }]
    }
  };

  render(){
    const { menu } = this.state;
    return (
      <Header className = 'header'>
        <div className='logo'></div>
        <Menu
          theme='dark'
          mode='horizontal'
          defaultSelectedKeys={['1']}
          style={{ lineHeight:'64px' }}
        >
          {
            menu.map((item,index)=>
              <Menu.Item key={item.key}>{item.title}</Menu.Item>
            )
          }
        </Menu>
      </Header>
    )
  }
}
export default Main;