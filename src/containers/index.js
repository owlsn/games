import React from 'react'
import { Component } from 'react'
import PropTypes from 'prop-types'
// import Posts from '../components/posts'
import  fetchPosts  from '../actions'
// import { Layout } from 'antd'
import { connect } from 'react-redux'

// const { Content } = Layout;

class Index extends Component {
  static propTypes = {
    // posts: PropTypes.array.isRequired
    get: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired
  }
  componentDidMount() {
    const { dispatch, get } = this.props
    dispatch(fetchPosts(get))
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

const mapStateToProps = state => {
  return {
    get : true
  }
}

export default connect(mapStateToProps)(Index)
