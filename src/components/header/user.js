import React from 'react'
import { Component } from 'react'
import { Menu, Dropdown, Button, Icon, message, Avatar, Badge } from 'antd'
import '../../styles/user.less'

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
      <div className="user-info">
        <Dropdown className="user-dropdown" overlay={menu}>
          <Button className="user">
            <div className='inner'>
              <Badge className="badge" dot>
                <Avatar className="avatar" shape="square" icon="avatar" />
              </Badge>
              <span className="username">username</span>
              <span className="num">message num</span>
            </div>
            <Icon className="caret-down" type="caret-down" />
          </Button>
        </Dropdown>
      </div>
    )
  }
}

export default User
