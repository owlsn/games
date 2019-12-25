import React, { Component } from 'react'
import { useHistory } from 'react-router-dom'
import { Progress, Button } from 'antd'

// 声明组件  并对外输出
export default class notfound extends Component {
  // 初始化页面常量 绑定事件方法
  constructor(props) {
    super(props)
    this.state = {
      // activeTab: 'pop' ,
    }
  }

  render() {
    return (
      <div className="developing notfound">
        <Progress
          type="circle"
          percent={100}
          format={() => '404'}
          width={200}
          status="active"
        />

        <div className="link ptbig">
          <Button
            type="primary"
            onClick={() => {
              let history = useHistory
              history.push('/home')
            }}
          >
            返回上一页
          </Button>
        </div>
      </div>
    )
  }
}
