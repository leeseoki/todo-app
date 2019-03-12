import React, { Component } from 'react';

class TodoForm extends Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit(event) {
    event.preventDefault()
    var itemValue = this.refs.item.value
    if(itemValue) {
      this.props.addItem(itemValue)
      this.refs.form.reset()
    }
  }

  render() {
    return (
      <form ref="form" onSubmit={this.onSubmit} className="form-inline">
        <input ref="item" type="text" className="form-control"  placeholder="Enter new todo" />
        <button type="submit" className="btn btn-primary">Add</button>
      </form>
    )
  }
}

export default TodoForm

