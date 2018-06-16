import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Mesh from '../mesh';

export default function Content() {
  return (
    <Router>
      <Route path="/" render={ route =>
        <Mesh.Webroot path={route.location.pathname} />
      }/>
    </Router>
  )
}