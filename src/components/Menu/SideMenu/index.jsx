import React, { Component } from 'react';
import { Layout, Menu } from 'antd';

const { SubMenu } = Menu;
const {
  Sider
} = Layout;

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: [{
        title: '紫藤架',
        key: '11',
        children: [{
          title: '茶桌',
          key: '111'
        }]
      }, {
        title: '小池',
        key: '12',
        children: [{
          title: '假山',
          key: '121'
        }]
      }, {
        title: '空地',
        key: '13',
        children: [{
          title: '秋千',
          key: '131'
        }]
      }]
    }
  };

  render() {
    const { menu } = this.state;
    return (
      <Sider width={200} style={{ background: '#fff' }}>
        <Menu
          mode="inline"
          // defaultSelectedKeys={['1']}
          // defaultOpenKeys={['sub1']}
          style={{ height: '100%' }}
        >{
            menu.map((item, index) => (
              <SubMenu key={item.key} title={<span>{item.title}</span>}>
                {
                  (item.children.length > 0)
                    ?
                    item.children.map((item, index) => (
                      <Menu.Item key={item.key}>{item.title}</Menu.Item>
                    ))
                    :
                    null
                }
              </SubMenu>
            ))
          }
        </Menu>
      </Sider>
    )
  }

};

export default Main;