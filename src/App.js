import './App.css';
import Header from './components/Header';
import Form from './components/Form.js';
import ToDoList from './components/ToDoList';

function App() {
  return (
    <div className="App">
      <Header />
      <Form />
      <ToDoList />
    </div>
  );
}

export default App;
