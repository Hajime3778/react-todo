import { Fragment, useEffect, useState, useContext } from 'react'
import axios from 'axios'
import './TodoEdit.css'
import { TodoListContext } from '../../context/TodoListContext'
import { useHistory, useParams } from 'react-router-dom'

const TodoEdit = () => {
  const id = parseInt(useParams().id);
  const {todoList, setTodoList} = useContext(TodoListContext);
  const emptyTodo = {
    id: id,
    title: '',
    description: '',
  };
  const [todo, setTodo] = useState(emptyTodo);

  useEffect(() => {
    const getTodo = async () => {
      const response = await axios.get(`todos/${id}`);
      setTodo(response.data);
    };
    getTodo();
  }, [id, setTodo]);

  const history = useHistory();

  const changedTitle = (e) => {
    const newTodo = Object.assign({}, todo);
    newTodo.title = e.target.value;
    setTodo(newTodo);
  }

  const changedDescription = (e) => {
    const newTodo = Object.assign({}, todo);
    newTodo.description = e.target.value;
    setTodo(newTodo);
  }

  const clickedSave = async () => {
    if (todo.title === '' && todo.description === '') return;
    const newTodoList = todoList.slice();
    newTodoList.forEach((newTodo) => {
      if(newTodo.id === id) {
        newTodo.title = todo.title;
        newTodo.description = todo.description;
      }
    });

    const newTodo = newTodoList.find((todo) => todo.id === id);
    await axios.put('todos', newTodo);

    setTodoList(newTodoList);
    history.push('/');
  }

  const clickedDelete = async () => {
    const newTodoList = todoList.slice().filter((todo) => todo.id !== id);

    await axios.delete(`todos/${id}`);

    setTodoList(newTodoList);
    history.push('/');
  }

  return (
    <Fragment>
      <h1>TodoEdit {id}</h1>
      
      <input 
        className="todo-title-input" 
        type="text" 
        value={todo.title} 
        onChange={changedTitle} 
      />
      <textarea 
        className="todo-description-input" 
        value={todo.description} 
        onChange={changedDescription} 
      />

      <button onClick={clickedSave}>save</button>
      <button onClick={clickedDelete}>delete</button>
    </Fragment>
  );
}

export default TodoEdit;
