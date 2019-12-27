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
        <Header
          className="header"
          style={{ height: '48px', padding: '0', background: '#fff' }}
        >
          <img
            className="logo"
            style={{
              width: '32px',
              height: '32px',
              background: 'rgba(255, 255, 255, 0.2)',
              margin: '8px 24px',
              float: 'left'
            }}
            src={owl}
            alt="owl"
          />
          <Trend />
          <Search
            className="searchInput"
            size="default"
            placeholder="查询 owls"
            style={{
              float: 'left',
              margin: '6px',
              width: '25%',
              height: '36px',
              minWidth: '200px',
              maxWidth: '500px'
            }}
          />
          <a href="/">
            <Icon
              type="rise"
              style={{
                float: 'left',
                margin: '6px',
                fontSize: '36px'
              }}
            />
          </a>
          <a href="/">
            <Icon
              type="bar-chart"
              style={{
                float: 'left',
                margin: '6px',
                fontSize: '36px'
              }}
            />
          </a>
          <Icon
            type="caret-down"
            style={{
              float: 'right',
              margin: '18px 0',
              fontSize: '18px'
            }}
          />
          <Avatar
            size={36}
            icon="user"
            style={{
              float: 'right',
              margin: '6px'
            }}
          />
          <Button
            type="primary"
            size="default"
            style={{
              margin: '9px',
              float: 'right'
            }}
          >
            登录
          </Button>
          <Button
            type="primary"
            size="default"
            style={{
              margin: '9px',
              float: 'right'
            }}
          >
            注册
          </Button>
        </Header>
      </Layout>
    )
  }
}

export default TopHeader
