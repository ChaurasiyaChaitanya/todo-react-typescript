import { useEffect, useState } from 'react';
import './App.css'
import TodoAdd from './components/TodoAdd';
import { TodoObj } from './models/todo';
import Todos from './components/Todos';

function App() {

  const [todos, setTodos] = useState<TodoObj[]>([]);

  useEffect(() => {
    if (sessionStorage.getItem('todos')) {
      setTodos(JSON.parse(sessionStorage.getItem('todos') as string));
    }
  }, [])

  const addTodo = (todo: TodoObj) => {
    setTodos([...todos, todo]);
    console.log(sessionStorage);
    sessionStorage.setItem('todos', JSON.stringify([...todos, todo]));
  }

  const deleteTodo = (id: string) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos); 
    sessionStorage.setItem('todos', JSON.stringify(updatedTodos));
  }
  
  return (
    <>
    <TodoAdd addTodo={addTodo}/>
    <Todos todos={todos} deleteTodo={deleteTodo} />
    </>
  );
}

export default App;
