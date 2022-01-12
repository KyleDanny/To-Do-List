import { useSelector } from 'react-redux';
import ToDoItem from './ToDoItem';
import { useDispatch } from 'react-redux';

const ToDoList = () => {
  const state = useSelector(state => state); 
  const dispatch = useDispatch();

  return (
    <div className="to-do-list-container">
      <button className="list-item__toggle-button" onClick={() => dispatch({ type: 'HIDE_LIST_ITEM' }) } > Hide Completed </button>
      <div>
        <button className="list-item__toggle-button" onClick={() => dispatch({ type: 'SHOW_LIST_ITEM' }) } > Show Completed </button>
      </div>
      <div className="to-do-list">
        {state.itemReducer.map(item => <ToDoItem
          key={item.id}
          toDoItem={item}
        />)}
      </div>
    </div>
  );
}

export default ToDoList;