import React, { Component } from 'react';
import { Breadcrumb } from 'antd';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: [{
      //   title: '首页',
      //   key: '1',
      // }, {
      //   title: '图册',
      //   key: '11',
      // }, {
      //   title: '笔记',
      //   key: '111'
      }]
    }
  };
  
  render() {

    const { menu } = this.state;

    return (
      <Breadcrumb style={{ margin: '16px 0' }}>
        {
          menu.map((item, index) => (
            <Breadcrumb.Item key={item.key}>{item.title}</Breadcrumb.Item>
          ))
        }
      </Breadcrumb>
    )
  }
};

export default Main;