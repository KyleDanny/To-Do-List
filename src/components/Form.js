import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const Form = () => {
  const dispatch = useDispatch();

  const [newItem, setNewItem] = useState({
    title: '',
    description: '',
    done: false,
    hidden: false,
    id: '',
  });

  const handleChange = e => {
    const { value } = e.target;
    setNewItem({
      ...newItem,
      [e.target.name]: value,
      done: false,
      hidden: false,
      id: (Math.floor(Math.random() * 1000)),
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: 'ADD_LIST_ITEM', payload: newItem })
    setNewItem('');
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form-container__form">
        <label className="form__label"> Title </label>
        <input
          type="text"
          name="title"
          value={newItem.title || ''}
          placeholder="Please fill in a title..."
          onChange={handleChange}
          className="form__input"
          required
        />
        <label className="form__label"> Description </label>
        <textarea
          type="text"
          name="description"
          value={newItem.description || ''}
          placeholder="Please fill in a description..."
          onChange={handleChange}
          className="form__input"
          required
        />
        <input type="submit" value="Add a new Item" className="form__submit-button" />
      </form>
    </div>
  );
};

export default Form;
