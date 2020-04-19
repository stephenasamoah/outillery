import React from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import HeaderComponent from './components/header/header.component';
import AuthComponent from './pages/auth/auth.component';

function App() {
    return (
        <div className="App">
            <HeaderComponent/>
            <Switch>
                <Route exact path='/' component={ Homepage }/>
                <Route path='/shop' component={ ShopPage }/>
                <Route path='/auth' component={ AuthComponent }/>
            </Switch>
        </div>
    );
}

export default App;
