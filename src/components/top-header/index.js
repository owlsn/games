import React from 'react'
import { Component } from 'react'
import { Row } from 'antd'
import Icons from './icons'
import Logo from './logo'
import SearchInput from './search'
import Trend from './trend'
import User from './user'
import '../../styles/top-header.less'

class TopHeader extends Component {
  render() {
    return (
      <Row className='top_header_index'>
        <Logo />
        <Trend />
        <SearchInput />
        <Icons />
        <User />
      </Row>
    )
  }
}

export default TopHeader
