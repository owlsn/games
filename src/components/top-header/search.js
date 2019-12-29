import React from 'react'
import { Component } from 'react'
import { Col, Input } from 'antd'
import '../../styles/top-header.less'

const { Search } = Input

class SearchInput extends Component {
  render() {
    return (
      <Col className='top_header_search' >
        <Search className='search_input'
            size="default"
            placeholder="查询 owls"
          />
      </Col>
    )
  }
}

export default SearchInput
