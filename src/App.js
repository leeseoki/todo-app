import React, { Component } from 'react'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import todoItems from './todoData'

class App extends Component {
  constructor(props) {
    super(props)
    this.addItem = this.addItem.bind(this)
    this.removeItem = this.removeItem.bind(this)
    this.maskItemDone = this.maskItemDone.bind(this)
    this.state = { todoItems: todoItems}
  }

  addItem(itemValue) {
    todoItems.unshift({
      id: todoItems.length+1, 
      title: itemValue, 
      done: false
    });
    this.setState({todoItems: todoItems})
  }

  removeItem(id) {
    todoItems.splice(id, 1)
    this.setState({todoItems: todoItems})
  }

  maskItemDone(id) {
    var todo = todoItems[id]
    todoItems.splice(id,1)
    todo.done = !todo.done
    todo.done ? todoItems.push(todo) : todoItems.unshift(todo)
    this.setState({todoItems: todoItems})
  }

  render() {
    return (
      <div className="row justify-content-center align-items-center">
        <div className="col-sm-12 col-md-6">
          <TodoList items={this.props.initItems} removeItem={this.removeItem} maskItemDone={this.maskItemDone}/>
          <p></p>
          <TodoForm addItem={this.addItem} />
        </div>
      </div>
    );
  }
}

export default App;
