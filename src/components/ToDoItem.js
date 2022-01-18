import React, { useState } from 'react';
import DeleteButton from './DeleteButton';
// import UpdateButton from './UpdateButton';
import { useDispatch } from 'react-redux';

const ToDoItem = ({ toDoItem }) => {
  const [editing, setEditing] = useState(false);
  const [updateItem, setUpdateItem] = useState({ title: '', description: '', id: '' });
  
  const dispatch = useDispatch();

  const handleToggleEdit = (e) => {
    e.stopPropagation();
    setEditing(editing ? false : true);
  }

  const handleChange = (e) => {
    e.stopPropagation();
    const { value } = e.target;
    setUpdateItem({
      ...updateItem,
      [e.target.name]: value,
      id: toDoItem.id,
    });
  }

  const handleUpdating = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch({ type: 'UPDATE_LIST_ITEM', payload: updateItem })
    setEditing(editing ? false : true);
  }

  const renderEditForm = () => {
    if (toDoItem.done === false) {
      if (editing) {
        return (
          <div>
            <form onSubmit={(e) => handleUpdating(e)}>
              <div> 
                <label className="form__label"> Title: &nbsp;
                <input name="title" type="text" 
                  defaultValue={toDoItem.title || updateItem.title} 
                  onChange={(e) => handleChange(e)} 
                />
                </label>
              </div>
              <div> 
                <label className="form__label"> Description: &nbsp;
                <input name="description" type="text" 
                  defaultValue={toDoItem.description || updateItem.description} 
                  onChange={(e) => handleChange(e)} 
                />
                </label>
              </div>
            </form>
          </div>
        )
      }
    }
    return;
  }

  const renderButtons = () => {
    if (toDoItem.done === false) {
      if (editing) {
        return (
          <div>
            <button className="list-item__update-button" onClick={(e) => handleUpdating(e)}> Save </button>
            <button className="list-item__delete-button" onClick={(e) => handleToggleEdit(e)}> Cancel </button>
          </div>
        )
      }
      return (
        <div>
          <button className="list-item__toggle-button" onClick={(event) => handleToggleEdit(event)}>Edit</button>
        </div>
      )
    }
  }

  return (
    <div
      key={toDoItem.id}
      className={(
        !toDoItem.done ? 'list-item' : 'list-item--done' &&
        toDoItem.done && toDoItem.hidden ? 'to-do-list--hidden' : 'list-item--done' 
      )}>
      <button className="list-item__toggle-button"
      onClick={() => dispatch({ type: 'TOGGLE_LIST_ITEM', payload: toDoItem }) } > 
      { !toDoItem.done ? 'Mark as Complete' : 'Still need to do!' } 
      </button>
      <p> <strong> Title: </strong> {toDoItem.title} </p>
      <p> <strong> Description: </strong> {toDoItem.description} </p>
      <div className="list-item__header">
        <DeleteButton toDoItem={toDoItem} />
      </div> 
      {renderEditForm()}
      {renderButtons()}
    </div>
  );
}

export default ToDoItem;
