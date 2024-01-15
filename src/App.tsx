import { useEffect, useState } from 'react';
import './App.css'
import TodoAdd from './components/TodoAdd';
import { todoObj } from './models/todo';

function App() {

  const [todos, setTodos] = useState<todoObj[]>([]);

  useEffect(() => {
    if (sessionStorage.getItem('todos')) {
      setTodos(JSON.parse(sessionStorage.getItem('todos') as string));
    }
  }, [])

  const addTodo = (todo: todoObj) => {
    setTodos([...todos, todo]);
    console.log(sessionStorage);
    sessionStorage.setItem('todos', JSON.stringify([...todos, todo]));
  }
  
  return (
    <>
    <TodoAdd addTodo={addTodo}/>
    </>
  );
}

export default App;
