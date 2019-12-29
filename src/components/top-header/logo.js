import React from 'react'
import { Component } from 'react'
import { Col } from 'antd'
import '../../styles/top-header.less'
import owl from '../../images/owl.svg'

class Logo extends Component {
  render() {
    return (
      <Col className='top_header_logo'>
        <img className="logo" src={owl} alt="owl" />
      </Col>
    )
  }
}

export default Logo
