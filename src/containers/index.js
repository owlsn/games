import React from 'react'
import { Component } from 'react'
import { Layout, Col } from 'antd'
import TopHeader from '../components/top-header/index'
import Banner from '../components/banner'
import InnerHeader from '../components/inner-header'
import Posts from '../components/posts'
import Items from '../components/items'

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
          <Items />
        </Col>
      </Content>
    </Layout>
    )
  }
}

export default Index
