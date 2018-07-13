import React from 'react'
import{Switch, Route} from 'react-router-dom'
import App from './App'
import Dashboard from './components/Dashboard/Dashboard'
import Form from './components/Form/Form'
import Header from './components/Header/Header'
import Product from './components/Product/Product'

export default (
    <Switch>
        <Route exact path="/" component={App} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/form" component={Form}/>
        <Route path="/header" component={Header}/>
        <Route path="/products" component={Product}/>
    </Switch>
)
