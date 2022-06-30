import React, {useState} from "react";
import { Input, Form } from 'antd';
import { SearchOutlined} from "@ant-design/icons";
import View from "../ViewTodos/index"
import styled from 'styled-components';

const SearchResult = styled.div`
  display: block;
  padding: 1px;
  background-color: rgb(238, 238, 238);
  width: 575px;
  min-height:100vh; 
  position: absolute;
  z-index: 1000;
`;
const SearchGo = ({todos})=>{
  const [name, setName] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
  }

  const searchForm=()=> {
  
    return (
      <Form onSubmit={handleSubmit}>
          <Input
            placeholder="search" suffix={<SearchOutlined />}
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{borderRadius: '10px'}}
          />
      </Form>
    )
  }
  const show =()=>{
    let filtered_list=todos.filter((elem)=>elem.todo_title.toUpperCase().includes(name.toUpperCase()))
    if(name){
         return(
          <SearchResult>
              <View todos={filtered_list} />
          </SearchResult>
         )  
     }
  }
    return(
      <>
          {searchForm()}
          {show()}
      </>
    )
}
export default SearchGo;