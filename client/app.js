import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router';
import Home from './components/home';

export default () => (
  <div>
    <Route exact path="/" component={Home} />
  </div>
);
