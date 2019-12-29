import React from 'react'
import { Component } from 'react'
import { Layout, Col } from 'antd'

const { Header, Content } = Layout;

class Debug extends Component {
  render() {
    return (
      <Layout>
      <Header style={{backgroundColor: '#FFF'}}>top Header</Header>
      <Header style={{backgroundColor: '#AAA'}}>inner Header</Header>
      <Content>
        <Col span={18} style={{backgroundColor:'gray'}}>left</Col>
        <Col span={6}>right</Col>
      </Content>
    </Layout>
    )
  }
}

export default Debug
