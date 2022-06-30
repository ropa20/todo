import React from "react";
import { Link } from "react-router-dom";
import { RightOutlined, UnorderedListOutlined} from "@ant-design/icons";
import { Card, Button, Typography, } from 'antd';
import styled from 'styled-components';


const ShowTitle = ({ todos, lists }) => {

  const { Text } = Typography;

  const Merge = styled.div`
    display: flex;
    float:right;
    align-items: baseline;
`;
const Title = styled.div`
    display: flex;
    align-items: baseline;
`;

  const show = () => {
    return lists.map((elem) => {
      const list_count= (todos.filter((item)=>item.category === elem.list_title)).length;
      return(
          <Link to={`/list/${elem.list_title}`}>
            <Card className="reminder" style={{ width: 575, height:80, color:"grey", borderRadius: 10 }}>
              <Merge>    
                <Text strong>{list_count}</Text><RightOutlined/> 
              </Merge>
              <Title>
                <Button
                  type="button"
                  shape="circle"
                  size="large"
                  icon={<UnorderedListOutlined />}
                  style={{ pointerEvents: "none", float: "left",backgroundColor: "#EFAF41", color:"white" }}/>
                <h1>{elem.list_title}</h1>
              </Title>
            </Card>
          </Link>            
      )
    });
  };
  return (show())
};

export default ShowTitle;
