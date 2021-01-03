import { Fragment, useState } from 'react';
import './TodoList.css';
import TodoItem from '../../components/TodoItem'
import { useHistory } from 'react-router-dom'

const sampleTodoList = [
  {
    id: 0,
    title: 'これはサンプル１です',
    description: 'これはサンプル１です',
  },
  {
    id: 1,
    title: 'これはサンプル２です',
    description: 'これはサンプル２です',
  }
];

const TodoList = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [todoList, setTodoList] = useState(sampleTodoList);
  const history = useHistory();

  const changedTitle = (e) => {
    setTitle(e.target.value);
  }

  const changedDescription = (e) => {
    setDescription(e.target.value);
  }

  const clickedButton = () => {
    const newId = Math.max(...todoList.map((todo)=>todo.id)) + 1;
    const newTodoList = todoList.slice();
    const newTodo = {
      id: newId,
      title: title,
      description: description,
    };
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
