import './App.css';
import axios from 'axios';
import TodoList from './views/TodoList/TodoList'
import TodoEdit from './views/TodoEdit/TodoEdit'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { TodoListProvider } from './context/TodoListContext'

axios.defaults.baseURL = 'https://api-creator.tk/react-lesson/';

const App = () => {
  return (
    <div className="App">
      <TodoListProvider>
        <Router>
          <Route exact path="/" component={TodoList} />
          <Route path="/edit/:id" component={TodoEdit} />
        </Router>
      </TodoListProvider>
    </div>
  );
}

export default App;
