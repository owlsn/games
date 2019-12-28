import React from 'react'
import { Component } from 'react'
import { Layout, Row, Col, Icon, Menu, Dropdown } from 'antd'

import '../styles/inner-header.less'

const { Header } = Layout

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
      <Layout className="layout">
        <Header className="inner_header">
          <Row className="row">
            <Col className="col">
              <div className="content">
                <span>VIEW</span>
                <a title="rise" className="rise" href="/">
                  <Icon type="rise" />
                </a>
                <a title="fail" className="fail" href="/">
                  <Icon type="fall" />
                </a>
                <a title="all" className="all" href="/">
                  <Icon type="appstore" />
                </a>
                <span>SORT</span>
                <Dropdown overlay={menu} trigger={['click']}>
                  <a className="ant-dropdown-link" href="/">
                    BEST <Icon type="down" />
                  </a>
                </Dropdown>
              </div>
            </Col>
          </Row>
        </Header>
      </Layout>
    )
  }
}

export default InnerHeader
