import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../actions/index";
import { Modal, Button, DatePicker, Form, Input } from 'antd';
import { Select } from 'antd';
import moment from 'moment';

const { Option } = Select;

const Todo =({info, lists})=> {
    const [inputDate, setInputDate]= useState(moment(new Date()));
    const [inputCategory, setInputCategory]= useState(info);
    //Dispatch
    const dispatch = useDispatch();
    const { addTodo} = bindActionCreators(actionCreators,dispatch)

    const [values, setValues] = useState({
        title: "",
        loading: false,
        error: "",
      });
    
      const {
        title,
        loading,
        error,
      } = values;

    const onSubmit = (event) => {
        event.preventDefault();
        setValues({ ...values, error: "", loading: true });

        const newTodo ={
            id:new Date(),
            todo_title: values.title,
            category: (inputCategory),
            timestamp: new Date(inputDate).toLocaleDateString(),
            check:false,
        }
        addTodo(newTodo)
        setValues({
            ...values,
            title: "",
            loading: false,
          });
          setVisible(false);
      };

    const handleChange = (name) => (event) => {
        const value =  event.target.value;
        setValues({ ...values, [name]: value });
    };

    const handleSelect = ()=>
    {
      return(
        (info ?(<Select style={{ width: 113, height: 28 }} 
          placeholder={info}
            disabled
            />)
          :(<Select style={{ width: 113, height: 28 }} 
            placeholder="select"
            onChange={value => setInputCategory(value)}
            >
            {lists.map(item => {
                return (
                  <Option key={item.titleId} value={item.list_title}>{item.list_title}</Option>);
              })}
          </Select>)
      )
      )
    }

    const createTodoForm = () => (
        <Form>
            <Input
              onChange={handleChange("title")}
              name="title"
              className="form-control my-3"
              placeholder="Add todo"
              value={title}
              required
            />
            <DatePicker  value={inputDate}  onChange={value => setInputDate(value)} allowClear/>
          {handleSelect()}
        </Form>
      );

      const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

     return (
      <>
        <Button type="link" size="large" onClick={showModal}>
            Add todo
        </Button>
        <Modal
          title="What to do?"
          visible={visible}
          footer={[
            <Button key="back" onClick={handleCancel}>
              Cancel
            </Button>,
            <Button key="submit" type="primary" loading={loading} onClick={onSubmit}>
              Add
            </Button>,
          ]}
        >
          <p>{createTodoForm()}</p>
        </Modal>
      </>
    );
}
export default Todo ;