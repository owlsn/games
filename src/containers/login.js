import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, Icon, Input, Button, Checkbox } from 'antd'
import { LOGIN } from '../constants/actions'

const mapStateToProps = state => ({ ...state.auth })

const mapDispatchToProps = dispatch => ({
  loginApi : (values) => 
    {
      dispatch({ type: LOGIN })
    }
})

class NormalLoginForm extends Component {
  componentDidMount() {
    const { setFieldsValue } = this.props.form
    const username = this.props.username
    const password = this.props.password
    setFieldsValue({
      username : username,
      password : password
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
        this.props.loginApi(values)
      }
    })
  }



  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <Form onSubmit={this.handleSubmit} className="login-form" style={{
        'maxWidth': "300px"
      }}>
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true
          })(<Checkbox>Remember me</Checkbox>)}
          <a className="login-form-forgot" style={{
            float: "right"
          }} href="/">
            Forgot password
          </a>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            style={{
              width: "100%"
            }}
          >
            Log in
          </Button>
          Or <a href="/">register now!</a>
        </Form.Item>
      </Form>
    )
  }
}

const Login = Form.create({ name: 'normal_login' })(NormalLoginForm);

export default connect(mapStateToProps, mapDispatchToProps)(Login)
