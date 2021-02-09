import { Fragment, useEffect, useState, useContext } from 'react';
import './TodoList.css';
import axios from 'axios'
import { TodoListContext } from "../../context/TodoListContext";
import TodoItem from '../../components/TodoItem'
import { useHistory } from 'react-router-dom'

const TodoList = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const {todoList, setTodoList} = useContext(TodoListContext);

  const history = useHistory();

  useEffect(() => {
    const getTodoList = async () => {
      const response = await axios.get('todos');
      setTodoList(response.data);
    };
    getTodoList();
  }, [setTodoList]);

  const changedTitle = (e) => {
    setTitle(e.target.value);
  }

  const changedDescription = (e) => {
    setDescription(e.target.value);
  }

  const clickedButton = async () => {
    if (title === '' && description === '') return;
    const newId = todoList.length > 0 ? Math.max(...todoList.map((todo)=>todo.id)) + 1 : 0;
    const newTodoList = todoList.slice();
    const newTodo = {
      id: newId,
      title: title,
      description: description,
    };

    await axios.post('todos', newTodo);

    newTodoList.push(newTodo);
    setTodoList(newTodoList);
    setTitle('');
    setDescription('');
  }

  return (
    <Fragment>
      <div>
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
      </div>
      <div>
        <button 
          className="todo-add-button" 
          onClick={clickedButton}
        >
          Click Me!!!
        </button>
      </div>
      {todoList.map((todo) => {
        return <TodoItem 
        todo={todo} 
        key={todo.id} 
        onClick={() => history.push(`/edit/${todo.id}`)} />;
      })}
    </Fragment>
  )
}

export default TodoList;
