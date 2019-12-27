import React from 'react'
import { Component } from 'react'
import { Menu, Dropdown, Button, Icon, message } from 'antd'

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
      <Dropdown overlay={menu}>
        <Button
          className="trend"
          style={{
            margin: '6px 0px',
            float: 'left',
            height: "36px",
            width: '10%',
            minWidth: '250px',
            maxWidth: '350px',
            border: 0
          }}
        >
          <Icon
            type="rise"
            style={{
              float: 'left',
              margin: "4px"
            }}
          />
          <span
            style={{
              float: 'left'
            }}
          >
            流行趋势
          </span>
          <Icon
            type="caret-down"
            style={{
              float: 'right',
              margin: '4px'
            }}
          />
        </Button>
      </Dropdown>
    )
  }
}

export default Trend
