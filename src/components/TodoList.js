import React, {Component} from 'react'
import TodoItem from './TodoItem'

export default class TodoList extends Component {
  render () {
    var items = this.props.items.map((item, index) => {
      return (
        <TodoItem key={index} item={item} id={index} removeItem={this.props.removeItem} maskItemDone={this.props.maskItemDone} />
      );
    });
    return (
      <ul className="list-group"> 
        <li className="list-group-item active">My Todo</li>
        {items} 
      </ul>
    );
  }
}
