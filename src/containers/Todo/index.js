import React from "react";
import { useParams, Link} from 'react-router-dom';
import {PlusCircleOutlined, LeftOutlined} from "@ant-design/icons";
import {Button, Layout} from "antd";
import View from "../../components/ViewTodos";
import SearchGo from "../../components/Search";
import Todo from "../../components/Todo";
import {useSelector} from "react-redux";
const { Content } = Layout;


const TodoContainer = () => {
  const params = useParams();
  const listName=params.listName;
  const parameter=params.todos;
  const todos=useSelector((state)=>state.todoReducer.todos)
  const lists=useSelector((state)=>state.listReducer.list2)


  const get_todos = (parameter) => {
    if(listName) {
      return todos.filter((elem)=>elem.category === params.listName);
    }
    switch(parameter) {
      case "today":
        return todos.filter((elem)=>elem.timestamp === new Date().toLocaleDateString())
      case "scheduled":
        return todos.filter((elem)=>elem.timestamp !== '1/1/1970');
      case "all":
        return todos;
      default: return  todos;
    }
  }
  const propTodos= get_todos(parameter);

  return <Layout>
    <Content>
    <Link to="/"><LeftOutlined/><h5>{listName ? listName : parameter.toUpperCase()}</h5></Link>
    <SearchGo todos={propTodos}/>
    <View todos={propTodos} />
    <Button
        type="primary"
        shape="circle"
        size="small"
        icon={<PlusCircleOutlined />}
        style={{ pointerEvents: "none" }}/>
      <Todo info={listName ? params.listName : null} lists={lists}/>
    </Content>
  </Layout>
}

export default TodoContainer;
