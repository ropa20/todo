import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeContainer from "./containers/Home";
import TodoContainer from "./containers/Todo";

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomeContainer />} />
        <Route path="todo/:todos" element={<TodoContainer />} />
        <Route path="list/:listName" element={<TodoContainer />} />

        <Route path="*" element={<div>NO PAGE</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
