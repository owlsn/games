import React from 'react'
import { Component } from 'react'
import { Layout } from 'antd'
import Posts from './posts'
import Items from './items'
import '../styles/lists.less'

const { Content, Sider } = Layout

class Lists extends Component {
  render() {
    return (
      <Layout>
        <Content className='posts'>
          <Posts />
        </Content>
        <Sider className='sider' style={{backgroundColor: '#FFF'}}>
          <Items />
        </Sider>
      </Layout>
    )
  }
}

export default Lists
