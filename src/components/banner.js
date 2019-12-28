import React from 'react'
import { Component } from 'react'
import { Layout, Row, Col } from 'antd'
import '../styles/banner.less'

const { Content } = Layout

class Banner extends Component {
  gutters = {}

  constructor() {
    super()
    this.state = {
      gutterKey: 1
    }
  }
  render() {
    const { gutterKey } = this.state
    const cols = []
    const colCount = 4
    for (let i = 0; i < colCount; i++) {
      cols.push(
        <Col key={i.toString()} span={24 / colCount}>
          <a href="/">
            <div className="detail">content</div>
          </a>
        </Col>
      )
    }
    return (
      <Layout className="layout">
        <Content className="banner">
          <Row className="row">
            <Col className="col">
              <div className="content">
                <div className="title">
                  <span>trending today</span>
                </div>
                <div className="images">
                  <Row gutter={[this.gutters[gutterKey]]}>{cols}</Row>
                </div>
              </div>
            </Col>
          </Row>
        </Content>
      </Layout>
    )
  }
}

export default Banner
