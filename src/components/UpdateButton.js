import React from 'react';
// import { useDispatch } from 'react-redux';
import Form from './Form';

const UpdateButton = ({ toDoItem }) => {
  // const dispatch = useDispatch();

  return (
    <div>
      <button className="list-item__update-button" type="button" > 
        Update
      </button>
      <div>
        {<Form toDoItem={toDoItem} />}
      </div>
    </div>
  );
}

export default UpdateButton;