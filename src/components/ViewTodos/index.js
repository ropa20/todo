import React from "react";
import { useDispatch } from "react-redux";
import {DeleteFilled} from "@ant-design/icons"
import { Checkbox, Empty } from 'antd';
import { deleteTodo, checkTodo } from "../../actions/todoActions";
import styled from 'styled-components';

const Item  = styled.div`
display: flex;
  justify-content: space-between;
  padding: 8px;
  border-bottom: 1px solid #cecece;

  .checked-item{
  text-decoration: line-through;
  padding:5px;
  }
  .not-checked-item{
    padding:5px;
  }
  .date{
  font-size: 20px;
  color:rgb(3, 124, 74);
  padding-left: 20px; 
  }
  .expired{
  font-size:20px;
  color:rgb(151, 10, 10);
  padding-left:20px; 
  }
`;
const Check = styled.div`
  display:inline;
  font-size:20px;
  padding-left:10px;
`;

const Delete = styled.div`
  background:transparent;
  border:none !important;
`;


const View = ({todos}) => {
   const dispatch = useDispatch();
   const today= new Date().toLocaleDateString();
   const count=todos.length;
// Return classes based on whether item is checked
  const isChecked = (item) =>
      item.check===true ? "checked-item" : "not-checked-item";
  const isExpired = (date) =>
  (new Date(today)>new Date(date)) ? "expired" : "date";

      const show =()=>{
        if(count===0)
        {
          return <Empty/>
        }
      return(
       todos.map((elem,index)=>{
        const date= elem.timestamp==='1/1/1970' ? null : elem.timestamp;
        return(
            <Item>
               <Check>
                   <Checkbox value={elem} checked={elem.check} type="checkbox" onChange={()=> dispatch(checkTodo(elem.id))}/>
                    <span className={isChecked(elem)}>
                      {elem.todo_title}
                    </span>
                    <div className={isExpired(elem.timestamp)}>
                      {date}
                    </div>
               </Check>
               <Delete
                   type="button"  
                   onClick={()=> dispatch(deleteTodo(elem.id))}>
                    <span style={{fontSize:25, color: "tomato"}}><DeleteFilled/></span>
               </Delete>  
            </Item>
          )
       })
      )}
   return(show())
 }

export default View ;