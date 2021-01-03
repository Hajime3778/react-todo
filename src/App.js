import './App.css';
import TodoList from './views/TodoList/TodoList'
import TodoEdit from './views/TodoEdit/TodoEdit'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const App = () => {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={TodoList} />
        <Route path="/edit/:id" component={TodoEdit} />
      </Router>
    </div>
  );
}

export default App;
