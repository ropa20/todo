import {
  Layout, Card, Button, Space, Typography,
} from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import {
  CalendarOutlined,
  InboxOutlined,
  PlusCircleOutlined,
} from '@ant-design/icons';
import Todo from '../Todo/index';
import ShowTitle from '../TitleName';
import Title from '../Title/index';
import SearchGo from '../Search/index';
import styled from 'styled-components';

const { Footer, Content } = Layout;
const Add = styled.div`
  display:flex;
  justify-content:space-between;
  background: transparent;
  border: none !important;
`;

const TodayScheduled = styled.div`
  display:flex;
  justify-content:space-between;
  padding-top: 10px
`;

const All = styled.div`
padding-top: 15px;
`;

const Home=({ today_count, scheduled_count, all_count, todos, lists }) => {
  const { Text } = Typography;

  return (
      <Layout>
        <Content>
          <SearchGo todos={todos} />
          <TodayScheduled>
            <span className="today">
              <Link to={`todo/${'today'}`}>
                <Card
                  title="Today"
                  className="today"
                  style={{ width: 282, height: 130, borderRadius: 10 }}>
                  <Space
                    align="center"
                    style={{ width: '100%', justifyContent: 'space-between', borderRadius: 10  }}>
                  <Button
                    type="primary"
                    shape="circle"
                    size="large"
                    icon={<CalendarOutlined />}
                    style={{ pointerEvents: 'none' }}
                  />
                  <Text strong>{today_count}</Text>
                  </Space>
                </Card>
              </Link>
            </span>
            <span className="scheduled">
              <Link to={`todo/${'scheduled'}`}>
                <Card
                  title="Scheduled"
                  className="scheduled"
                  style={{ width: 282, height: 130, borderRadius: 10  }}>
                  <Space
                    align="center"
                    style={{ width: '100%', justifyContent: 'space-between' }}
                  >
                  <Button
                    type="danger"
                    shape="circle"
                    size="large"
                    icon={<CalendarOutlined />}
                    style={{ pointerEvents: 'none' }}
                  />
                  <Text strong>{scheduled_count}</Text>
                  </Space>
                </Card>
              </Link>
            </span>
          </TodayScheduled>
          <All>
            <Link to={`todo/${'all'}`}>
              <Card
                title="All"
                className="all"
                style={{ width: 575, height: 130, borderRadius: 10 }}>
                <Space
                  align="center"
                  style={{ width: '100%', justifyContent: 'space-between' }}>
                <Button
                  type="secondary"
                  shape="circle"
                  size="large"
                  icon={<InboxOutlined />}
                  style={{ pointerEvents: 'none', backgroundColor: 'grey', color: 'white' }}
                />
                <Text strong>{all_count}</Text>
                </Space>
              </Card>
            </Link>
          </All>
          <h3>My Lists</h3>
          <ShowTitle todos={todos} lists={lists}/>
        </Content>
        <Footer>
          <Add>
            <div className='todo'>
              <Button
                type="primary"
                shape="circle"
                size="small"
                icon={<PlusCircleOutlined />}
                style={{ pointerEvents: 'none' }}
              />
              <Todo lists={lists}/>
            </div>
            <div className='title'><Title /></div>
          </Add>
        </Footer>
      </Layout>
  );
}

export default Home;
