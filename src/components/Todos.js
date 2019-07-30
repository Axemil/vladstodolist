import React, { Component } from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

class Todos extends Component {
  render() {
    return this.props.todos.map(todo => (
      <TodoItem
        key={todo.id}
        todo={todo}
        getProp={this.props.getProp}
        delTodo={this.props.delTodo}
      />
    ));
  }
}

//PropTypes


export default Todos;
