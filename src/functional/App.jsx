import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Input from './Input';
import List from './List';

export default function App() {
  const [todos, setTodos] = useState(["breakfast", "lunch", "snacks", "dinner"]);
  let [editData, setEditData] = useState({index: -1, data:''})

  const addTodo = (value) => {
    // Create a new array with the new todo item
    setTodos([...todos, value]);

   toast.success("Todos added successfully")

  }

  // delte ke liye function
const deleteTodo = (value) => {
 let filterTodos = todos.filter((todo) => todo !== value) 
 setTodos([...filterTodos])
  }

  const editToto = (index, data) => {
    setEditData({
      index,
      data
    })
  }

  const updateTodo = (index, data) => {
    todos.splice(index, 1 , data)
    setTodos([...todos])
    setEditData({
      index: -1,
      data: ""
    })
    toast.success("Todos update successfully")
  }


 
  return (
    <div className="container mt-3">
      <Input addTodo={addTodo} editData = {editData} updateTodo = {updateTodo} todos={todos}/>
      <List todos={todos}  deleteTodo = {deleteTodo} editToto={editToto} editData = {editData}/>
    
      <Toaster />
    </div>
  );
}
