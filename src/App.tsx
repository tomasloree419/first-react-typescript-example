import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import { PostsList } from './features/posts/PostsList';
import { AddPostForm } from './features/posts/AddPostForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <PostsList/> } />
        <Route path="create" element={ <AddPostForm/> } />
      </Routes>
    </Router>
  );
}

export default App;
