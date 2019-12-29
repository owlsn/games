import React from 'react'
import { Component } from 'react'
import { Layout, Col } from 'antd'
import TopHeader from '../components/top-header/index'
import Banner from '../components/banner'
import InnerHeader from '../components/inner-header'
import Posts from '../components/posts'
import Sider from '../components/sider'

const { Content } = Layout;

class Index extends Component {
  render() {
    return (
      <Layout>
      <Content>
        <TopHeader />
      </Content>
      <Content>
        <InnerHeader />
      </Content>
      <Content><Banner /></Content>
      <Content>
        <Col span={18}>
          <Posts />
        </Col>
        <Col span={6}>
          <Sider />
        </Col>
      </Content>
    </Layout>
    )
  }
}

export default Index
