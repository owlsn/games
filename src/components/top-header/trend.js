import React from 'react'
import { Component } from 'react'
import { Col, Menu, Dropdown, Icon, message } from 'antd'
import '../../styles/top-header.less'

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
      <Col className="top_header_trend">
        <Dropdown overlay={menu}>
          <a className="ant-dropdown-link" href="/">
                  <Icon className='rise' type="rise" />
            popular <Icon className='down' type="down" />
          </a>
        </Dropdown>
      </Col>
    )
  }
}

export default Trend
