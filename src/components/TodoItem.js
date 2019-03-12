import React, {Component} from 'react'
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/lib/md'

class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.deleteHandel = this.deleteHandel.bind(this);
    this.doneHandel = this.doneHandel.bind(this);
  }

  deleteHandel() {
    var id = parseInt(this.props.id);
    this.props.removeItem(id);
  }

  doneHandel() {
    var id = parseInt(this.props.id);
    this.props.maskItemDone(id);
  }

  render() {
    return (
      <li className="list-group-item">
        {this.props.item.done ? (
          <MdCheckBox onClick={this.doneHandel} /> 
        ) : (
          <MdCheckBoxOutlineBlank onClick={this.doneHandel} />
        )}
        
        {this.props.item.title}
        <button type="button" onClick={this.deleteHandel} className="badge btn btn-danger">Delete</button>
      </li>
    )
  }
}

export default TodoItem


