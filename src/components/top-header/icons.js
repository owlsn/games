import React from 'react'
import { Component } from 'react'
import { Col, Icon } from 'antd'
import '../../styles/top-header.less'

class Icons extends Component {
  render() {
    return (
      <Col className="top_header_icons">
        <a className="polular" href="/">
          <Icon type="rise" />
        </a>
        <a className="all" href="/">
          <Icon type="bar-chart" />
        </a>
        <div className="chat">
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
      </Col>
    )
  }
}

export default Icons
