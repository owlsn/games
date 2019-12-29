import React from 'react'
import { Component } from 'react'
import { Row, Col } from 'antd'
import '../styles/banner.less'

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
            <Row>title</Row>
            <Row>content</Row>
            <Row>category</Row>
          </a>
        </Col>
      )
    }
    return (
      <Col>
        <Row gutter={[this.gutters[gutterKey]]}>{cols}</Row>
      </Col>
    )
  }
}

export default Banner
