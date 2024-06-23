import React, { Component } from "react";
import Input from "./Input";
import List from "./List";
import toast, { Toaster } from "react-hot-toast";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: ["breakfast", "lunch", "snacks", "dinner"],
      editData: {
        index: -1,
        data: ''
      }
    };
  }

  addTodo = (value) => {
    this.setState({
      todos: [...this.state.todos, value],
    });
    toast.success("Todo added successfully");
  };

  deleteTodo = (value) => {
    let filterTodos = this.state.todos.filter((todo) => todo !== value);
    this.setState({ todos: [...filterTodos] });
    toast.success("Todo deleted successfully");
  };

  editTodo = (index, data) => {
    this.setState({
      editData: {
        index,
        data
      }
    });
  }

  updateTodo = (index, data) => {
    let updatedTodos = [...this.state.todos];
    updatedTodos[index] = data;
    this.setState({
      todos: updatedTodos,
      editData: {
        index: -1,
        data: ''
      }
    });
    toast.success("Todo updated successfully");
  }

  render() {
    return (
      <div className="container mt-3">
        <Input 
          addTodo={this.addTodo} 
          editData={this.state.editData}  
          updateTodo={this.updateTodo} 
        />
        <List 
          todos={this.state.todos} 
          deleteTodo={this.deleteTodo} 
          editTodo={this.editTodo} 
        />
        <Toaster />
      </div>
    );
  }
}
