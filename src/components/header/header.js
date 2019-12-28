import React from 'react'
import { Component } from 'react'
import { Layout, /*Button, */ Input, Icon } from 'antd'
import Trend from './trend'
import User from './user'
import '../../styles/header.less'
import owl from '../../images/owl.svg'
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
          <a className="polular" href="/">
            <Icon type="rise" />
          </a>
          <a className="all" href="/">
            <Icon type="bar-chart" />
          </a>
          <div className='chat'>
            <a className="message" href="/">
              <Icon type="message" />
            </a>
            <a className="edit" href="/">
              <Icon type="edit" />
            </a>
            <a className="other" href="/">
              <Icon type="appstore" />
            </a>
          </div>

          <User />
          {/* <Button type="primary" size="default" className="login">
            登录
          </Button>
          <Button type="primary" size="default" className="register">
            注册
          </Button> */}
        </Header>
      </Layout>
    )
  }
}

export default TopHeader
