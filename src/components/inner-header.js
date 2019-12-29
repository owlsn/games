import React from 'react'
import { Component } from 'react'
import { Row, Col, Icon, Menu, Dropdown } from 'antd'
import '../styles/inner-header.less'

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="http://www.alipay.com/">1st menu item</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="http://www.taobao.com/">2nd menu item</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
)

class InnerHeader extends Component {
  render() {
    return (
      <Row className='inner_header'>
        <Col>VIEW</Col>
        <Col>
          <a title="rise" className="rise" href="/">
            <Icon type="rise" />
          </a>
        </Col>
        <Col>
          <a title="fail" className="fail" href="/">
            <Icon type="fall" />
          </a>
        </Col>
        <Col>
          <a title="all" className="all" href="/">
            <Icon type="appstore" />
          </a>
        </Col>
        <Col>SORT</Col>
        <Col>
          <Dropdown overlay={menu} trigger={['click']}>
            <a className="ant-dropdown-link" href="/">
              BEST <Icon type="down" />
            </a>
          </Dropdown>
        </Col>
      </Row>
    )
  }
}

export default InnerHeader
