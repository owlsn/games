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
            <div className="detail" style={{padding: '10px'}}>
              <div style={{fontSize: '18px', fontWeight: '700', color:'black'}}>title</div>
              <div style={{wordWrap: "break-word", color: 'black'}}>contentcontentcontentcontentcontentcontentcontentcontentcontentcontent</div>
              <div style={{position: "absolute", bottom: '4px',  fontSize: '12px', fontWeight: '700'}}>category1,category2</div>
            </div>
          </a>
        </Col>
      )
    }
    return (
      <Layout className="banner_layout">
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
