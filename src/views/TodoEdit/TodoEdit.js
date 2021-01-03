import { Fragment, useState, useContext } from 'react'
import './TodoEdit.css'
import { TodoListContext } from '../../context/TodoListContext'
import { useHistory, useParams } from 'react-router-dom'

const TodoEdit = () => {
  const id = parseInt(useParams().id);
  const {todoList, setTodoList} = useContext(TodoListContext);
  const todo = todoList.filter((todo) => todo.id === id)[0];
  const [title, setTitle] = useState(todo.title);
  const [description, setDescription] = useState(todo.description);

  const history = useHistory();

  const changedTitle = (e) => {
    setTitle(e.target.value);
  }

  const changedDescription = (e) => {
    setDescription(e.target.value);
  }

  const clickedSave = () => {
    const newTodoList = todoList.slice();
    newTodoList.forEach((todo) => {
      if(todo.id === id) {
        todo.title = title;
        todo.description = description;
      }
    });
    setTodoList(newTodoList);
    history.push('/');
  }

  const clickedDelete = () => {
    const newTodoList = todoList.slice().filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
    history.push('/');
  }

  return (
    <Fragment>
      <h1>TodoEdit {id}</h1>
      
      <input 
        className="todo-title-input" 
        type="text" 
        value={title} 
        onChange={changedTitle} 
      />
      <textarea 
        className="todo-description-input" 
        value={description} 
        onChange={changedDescription} 
      />

      <button onClick={clickedSave}>save</button>
      <button onClick={clickedDelete}>delete</button>
    </Fragment>
  );
}

export default TodoEdit;
