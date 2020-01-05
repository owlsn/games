import React from 'react'
import { Component } from 'react'
// import PropTypes from 'prop-types'
// import Posts from '../components/posts'
import axios from 'axios'
// import { Layout } from 'antd'

// const { Content } = Layout;

class Index extends Component {
  static propTypes = {
    // posts: PropTypes.array.isRequired
  }
  componentDidMount() {
    axios.post('/api/index', {}).then(response => {
      console.log(response)
    }).catch(err => {
      console.log(err)
    })
  }
  render() {
    // const { posts } = this.props
    return (
      <div>
        <h2>hello, owlslist</h2>
        <div>
          {/* <Posts posts={posts} /> */}
        </div>
      </div>
    )
  }
}

export default Index
