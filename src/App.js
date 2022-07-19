import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UsersList from './pages/UsersList';
import TodosList from './pages/TodosList';
import Auth from './pages/Auth';
import Header from './components/Header';
import { Box } from '@mui/material';

function App() {
  return (
    <Box>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route 
            path='/users'
            element={<UsersList />}
          />
          <Route 
            path='/todos'
            element={<TodosList />}
          />
          <Route 
            path='/auth'
            element={<Auth />}
          >
              <Route 
                path='/auth/register'
                element={<Auth.Register />}
              />
          </Route>
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
