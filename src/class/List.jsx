import React, { Component } from "react";

export default class List extends Component {
  render() {
    return (
      <section className="mt-4">
        <ul className="list-group">
          {this.props.todos.length > 0 ? (
            this.props.todos.map((value, index) => (
              <li
                className="list-group-item d-flex justify-content-between"
                key={index}
              >
                <div>{value}</div>
                <div>
                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => this.props.editTodo(index, value)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => this.props.deleteTodo(value)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))
          ) : (
            <li className="list-group-item">No items</li>
          )}
        </ul>
      </section>
    );
  }
}
