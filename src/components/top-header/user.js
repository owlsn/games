import React from 'react'
import { Component } from 'react'
import { Col, Menu, Dropdown, Button, Icon, message, Avatar, Badge  } from 'antd'
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

class User extends Component {
  render() {
    return (
      <Col className='top_header_user'>
        <Button type="primary">login</Button>
        <Button type="primary">register</Button>
        <Dropdown overlay={menu}>
          <Button >
            <div >
              <Badge dot>
                <Avatar shape="square" icon="avatar" />
              </Badge>
              <span>username</span>
              <span>message num</span>
            </div>
            <Icon type="caret-down" />
          </Button>
        </Dropdown>
      </Col>
    )
  }
}

export default User
