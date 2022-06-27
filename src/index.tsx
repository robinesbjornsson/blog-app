import React from 'react';
import './index.css';
import App from './App';
import { createRoot } from 'react-dom/client';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { fetchUsers } from './features/users/userSlice';
import { fetchPosts, fetchComments } from './features/posts/postSlice';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const container = document.getElementById('root')!;
const root = createRoot(container);

store.dispatch(fetchUsers());
store.dispatch(fetchPosts());
store.dispatch(fetchComments());


root.render(
  <React.StrictMode>
   <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);

