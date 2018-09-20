import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import AboutPage from './Pages/AboutPage';
import NotFound from './Pages/NotFound';
import Category from './Pages/CategoryScreen';

let Router = () =>
    <HashRouter>
        <Switch>
            <Route exact path='/' component={App} />
            <Route exact path='/About' component={AboutPage} />
            <Route exact path='/cats/:category' component={Category} />
            <Route path='*' component={NotFound} />        
        </Switch>
    </HashRouter>

export default Router;