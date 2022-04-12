import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UsersList from './components/UsersList';
import TodosList from './components/TodosList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route 
            path='/users'
            element={<UsersList />}
          />
          <Route 
            path='/todos'
            element={<TodosList />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
