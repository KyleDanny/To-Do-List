import React from 'react';
import { useDispatch } from 'react-redux';

const DeleteButton = ({ toDoItem }) => {
  const dispatch = useDispatch();

  return (
    <div>
      { toDoItem.done ? 
        <button className="list-item__delete-button" type="button" 
          onClick={() => dispatch({ type: 'DELETE_LIST_ITEM', payload: toDoItem }) } > 
          Delete
        </button> : '' }
    </div>
  );
}

export default DeleteButton;
