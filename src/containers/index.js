import React, { Component } from 'react'
import {
  Layout,
  Menu,
  Breadcrumb,
  Icon,
  Row,
  Col,
  Comment,
  Avatar,
  Card,
  Timeline,
  Steps
} from 'antd'

const { SubMenu } = Menu
const { Header, Content, Sider } = Layout
const { Step } = Steps
const { Meta } = Card

const ExampleComment = ({ children }) => (
  <Timeline>
    <Timeline.Item>
      <Comment
        actions={[<span key="comment-nested-reply-to">Reply to</span>]}
        author={<a href="/">Han Solo</a>}
        avatar={
          <Avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            alt="Han Solo"
          />
        }
        content={
          <p>
            We supply a series of design principles, practical patterns and high
            quality design resources (Sketch and Axure).
          </p>
        }
      >
        {children}
      </Comment>
    </Timeline.Item>
  </Timeline>
)

class Index extends Component {
  render() {
    return (
      <Layout style={{ background: 'transparent' }}>
        <Header
          className="header"
          style={{ height: '48px', background: '#fff' }}
        >
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '48px', background: 'transparent' }}
          >
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
        </Content>
        <Content style={{ padding: '0 50px' }}>
          <Steps current={1}>
            <Step title="Finished" description="This is a description." />
            <Step
              title="In Progress"
              subTitle="Left 00:00:08"
              description="This is a description."
            />
            <Step title="Waiting" description="This is a description." />
            <Step title="Waiting" description="This is a description." />
          </Steps>
        </Content>
        <Content style={{ padding: '0 50px' }}>
          <Row>
            <Col span={18}>
              <Layout style={{ padding: '24px 0', background: 'transparent' }}>
                <Content style={{ background: '#fff' }}>
                  <Card
                    actions={[
                      <Icon type="setting" key="setting" />,
                      <Icon type="edit" key="edit" />,
                      <Icon type="ellipsis" key="ellipsis" />
                    ]}
                  >
                    <ExampleComment></ExampleComment>
                  </Card>
                  <div style={{ padding: '24px' }}>
                    <ExampleComment>
                      <ExampleComment />
                      <ExampleComment />
                    </ExampleComment>
                  </div>
                </Content>
              </Layout>
              <Layout style={{ padding: '24px 0', background: 'transparent' }}>
                <Content style={{ background: '#fff' }}>
                  <Card
                    actions={[
                      <Icon type="setting" key="setting" />,
                      <Icon type="edit" key="edit" />,
                      <Icon type="ellipsis" key="ellipsis" />
                    ]}
                  >
                    <ExampleComment></ExampleComment>
                  </Card>
                  <div style={{ padding: '24px' }}>
                    <ExampleComment>
                      <ExampleComment />
                      <ExampleComment />
                    </ExampleComment>
                  </div>
                </Content>
              </Layout>
            </Col>

            <Col span={6}>
              <Layout style={{ padding: '24px', background: 'transparent' }}>
                <Sider
                  width={250}
                  style={{ background: '#fff', margin: '0 48px' }}
                >
                  <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%' }}
                  >
                    <SubMenu
                      key="sub1"
                      title={
                        <span>
                          <Icon type="user" />
                          subnav 1
                        </span>
                      }
                    >
                      <Menu.Item key="1">option1</Menu.Item>
                      <Menu.Item key="2">option2</Menu.Item>
                      <Menu.Item key="3">option3</Menu.Item>
                      <Menu.Item key="4">option4</Menu.Item>
                    </SubMenu>
                    <SubMenu
                      key="sub2"
                      title={
                        <span>
                          <Icon type="laptop" />
                          subnav 2
                        </span>
                      }
                    >
                      <Menu.Item key="5">option5</Menu.Item>
                      <Menu.Item key="6">option6</Menu.Item>
                      <Menu.Item key="7">option7</Menu.Item>
                      <Menu.Item key="8">option8</Menu.Item>
                    </SubMenu>
                    <SubMenu
                      key="sub3"
                      title={
                        <span>
                          <Icon type="notification" />
                          subnav 3
                        </span>
                      }
                    >
                      <Menu.Item key="9">option9</Menu.Item>
                      <Menu.Item key="10">option10</Menu.Item>
                      <Menu.Item key="11">option11</Menu.Item>
                      <Menu.Item key="12">option12</Menu.Item>
                    </SubMenu>
                  </Menu>
                </Sider>
              </Layout>
              <Layout style={{ padding: '24px', background: 'transparent' }}>
                <Sider
                  width={250}
                  style={{ background: '#fff', margin: '0 48px' }}
                >
                  <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%' }}
                  >
                    <SubMenu
                      key="sub1"
                      title={
                        <span>
                          <Icon type="user" />
                          subnav 1
                        </span>
                      }
                    >
                      <Menu.Item key="1">option1</Menu.Item>
                      <Menu.Item key="2">option2</Menu.Item>
                      <Menu.Item key="3">option3</Menu.Item>
                      <Menu.Item key="4">option4</Menu.Item>
                    </SubMenu>
                    <SubMenu
                      key="sub2"
                      title={
                        <span>
                          <Icon type="laptop" />
                          subnav 2
                        </span>
                      }
                    >
                      <Menu.Item key="5">option5</Menu.Item>
                      <Menu.Item key="6">option6</Menu.Item>
                      <Menu.Item key="7">option7</Menu.Item>
                      <Menu.Item key="8">option8</Menu.Item>
                    </SubMenu>
                    <SubMenu
                      key="sub3"
                      title={
                        <span>
                          <Icon type="notification" />
                          subnav 3
                        </span>
                      }
                    >
                      <Menu.Item key="9">option9</Menu.Item>
                      <Menu.Item key="10">option10</Menu.Item>
                      <Menu.Item key="11">option11</Menu.Item>
                      <Menu.Item key="12">option12</Menu.Item>
                    </SubMenu>
                  </Menu>
                </Sider>
              </Layout>
              <Layout style={{ padding: '24px', background: 'transparent' }}>
                <Sider
                  width={250}
                  style={{ background: '#fff', margin: '0 48px' }}
                >
                  <Card
                    hoverable
                    style={{ width: 250 }}
                    cover={
                      <img
                        alt="example"
                        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                      />
                    }
                  >
                    <Meta
                      title="Europe Street beat"
                      description="www.instagram.com"
                    />
                  </Card>
                </Sider>
              </Layout>
            </Col>
          </Row>
        </Content>
      </Layout>
    )
  }
}

export default Index
