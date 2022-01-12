import reducers from './reducers';
import Header from './components/Header';

import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

test('reducers', () => {
  let state;
  state = reducers(undefined, {});
  expect(state).toEqual({itemReducer:[]});
});

test('reducer & action ADD', () => {
  let state;
  state = reducers({itemReducer:[{title:'People',description:'Persons',done:false,id:656}]}, {type:'ADD_LIST_ITEM',payload:{title:'Apple',description:'My apples',done:false,id:863}});
  expect(state).toEqual({itemReducer:[{title:'People',description:'Persons',done:false,id:656},{title:'Apple',description:'My apples',done:false,id:863}]});
});

test('reducer & action TOGGLE DONE / NOT DONE', () => {
  let state;
  state = reducers({itemReducer:[{title:'dogs',description:'dogsees',done:true,id:656}]}, {type:'TOGGLE_LIST_ITEM',payload:{title:'dogs',description:'dogsees',done:true,id:656}});
  expect(state).toEqual({itemReducer:[{title:'dogs',description:'dogsees',done:false,id:656}]});
});

test('reducer & action UPDATE', () => {
  let state;
  state = reducers({itemReducer:[{title:'dogs',description:'dogsees',done:false,id:656}]}, {type:'UPDATE_LIST_ITEM',payload:{title:'People',description:'Persons',id:656}});
  expect(state).toEqual({itemReducer:[{title:'People',description:'Persons',done:false,id:656}]});
});

test('reducer & action DELETE', () => {
  let state;
  state = reducers({itemReducer:[{title:'People',description:'Persons',done:true,id:656},{title:'Apple',description:'My apples',done:false,id:863}]}, {type:'DELETE_LIST_ITEM',payload:{title:'People',description:'Persons',done:true,id:656}});
  expect(state).toEqual({itemReducer:[{title:'Apple',description:'My apples',done:false,id:863}]});
});

describe('Components: Header', () => {
  test('renders part of h1', () => {
    render(<Header />);
    const text = screen.getByText(/List/i);
    expect(text).toBeInTheDocument();
  });

  test('Snapshot: renders the header', () => {
    const header = renderer.create(<Header />).toJSON();
    expect(header).toMatchSnapshot();
  });
});
