import React from 'react'
import { Component } from 'react'
import TopHeader from '../components/header/header'
import InnerHeader from '../components/inner-header'
import Banner from '../components/banner'

class Index extends Component {
  render() {
    return (
      <div>
        <TopHeader />
        <InnerHeader />
        <Banner />
      </div>
    )
  }
}

export default Index
