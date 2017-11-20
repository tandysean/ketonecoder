import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router';
import Scale from './components/scale';

export default () => (
  <div>
    <Route exact path="/" render={ (props) => (
        <Scale weight={256} />
      )} />
  </div>
);
