import React from 'react'
import { Component } from 'react'
import { Menu, Dropdown, Button, Icon, message } from 'antd'
import '../styles/trend.less'

function handleMenuClick(e) {
  message.info('Click on menu item.')
  console.log('click', e)
}

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">
      <Icon type="user" />
      1st menu item
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="2">
      <Icon type="user" />
      2nd menu item
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">
      <Icon type="user" />
      3rd item
    </Menu.Item>
  </Menu>
)

class Trend extends Component {
  render() {
    return (
      <Dropdown className="trend-dropdown" overlay={menu}>
        <Button className="trend">
          <Icon type="rise" className="popular" />
          <span>流行趋势</span>
          <Icon className="caret-down" type="caret-down" />
        </Button>
      </Dropdown>
    )
  }
}

export default Trend
