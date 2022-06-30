import React from "react";
import "../../index.css";
import { useSelector } from "react-redux";
import Home from "../../components/Home";

const HomeContainer = () => {
    const todos=useSelector((state)=>state.todoReducer?state.todoReducer:[]);
    const lists=useSelector((state)=>state.listReducer.list2?state.listReducer.list2:[])
    const today= new Date().toLocaleDateString();
    const today_count= todos.filter((elem)=>elem.timestamp === today).length;
    const scheduled_count= todos.filter((elem)=>elem.timestamp !== '1/1/1970').length;
    const all_count= todos.length;

    return <Home today_count={today_count} scheduled_count={scheduled_count} all_count={all_count} todos={todos} lists={lists} />
}
export default HomeContainer;