import React, { Component } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

export class TodoItem extends Component {
  getStyle = () => {
    return this.props.todo.completed ? "todo-done" : "todo-inProgress";
  };

  render() {
    const { id, title } = this.props.todo;
    return (
      <div className={this.getStyle() + " todo-item"}>
        <p>
          <input type="checkbox" onChange={this.props.getProp.bind(this, id)} />
          {this.props.todo.title}
        </p>
        <button onClick={this.props.delTodo.bind(this, id)}>
          <FontAwesomeIcon className="todo-icon" icon={faTimesCircle} />
        </button>
      </div>
    );
  }
}



export default TodoItem;
