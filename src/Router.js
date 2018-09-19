import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import AboutPage from './AboutPage';
import NotFound from './NotFound';

let Router = () =>
    <HashRouter>
        <Switch>
            <Route exact path='/' component={App} />
            <Route exact path='/About' component={AboutPage} />
            <Route path='*' component={NotFound} />
        </Switch>
    </HashRouter>

export default Router;