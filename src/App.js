import './App.css';
import TodoList from './views/TodoList/TodoList'
import TodoEdit from './views/TodoEdit/TodoEdit'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { TodoListProvider } from './context/TodoListContext'

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
