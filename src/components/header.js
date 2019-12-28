import React from 'react'
import { Component } from 'react'
import { Layout, Button, Input, Icon, Avatar } from 'antd'
import Trend from './trend'

import '../styles/header.less'
import owl from '../images/owl.svg'
const { Search } = Input
const { Header } = Layout

class TopHeader extends Component {
  render() {
    return (
      <Layout>
        <Header className="header">
          <img className="logo" src={owl} alt="owl" />
          <Trend />
          <Search
            className="searchInput"
            size="default"
            placeholder="查询 owls"
          />
          <a href="/">
            <Icon className="polular" type="rise" />
          </a>
          <a href="/">
            <Icon type="bar-chart" className="all" />
          </a>
          <Icon
            type="caret-down"
            style={{
              float: 'right',
              margin: '18px 0',
              fontSize: '18px'
            }}
          />
          <Avatar size={36} icon="user" className="user" />
          <Button type="primary" size="default" className="login">
            登录
          </Button>
          <Button type="primary" size="default" className="register">
            注册
          </Button>
        </Header>
      </Layout>
    )
  }
}

export default TopHeader
