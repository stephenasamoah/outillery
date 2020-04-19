import * as React from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import HeaderComponent from './components/header/header.component';
import AuthComponent from './pages/auth/auth.component';
import { auth } from './firebase/firebase-utils';
import { User } from './utilities/_models/user.model';

interface State {
    currUser: User | null
}

class App extends React.Component<{}, State> {
    constructor(props: any) {
        super(props);

        this.state = {
            currUser: {} as User
        };
    }

    unsubscribeFromAuth = {};

    componentDidMount(): void {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(u => {
            this.setState({ currUser: u });
            console.log(this.state);
        });
    }

    componentWillUnmount() {
        return this.unsubscribeFromAuth;
    }

    render(): React.ReactNode {
        const { currUser } = this.state;
        return (
            <div className="App">
                <HeaderComponent currUser={ currUser }/>
                <Switch>
                    <Route exact path='/' component={ Homepage }/>
                    <Route path='/shop' component={ ShopPage }/>
                    <Route path='/auth' component={ AuthComponent }/>
                </Switch>
            </div>
        );
    }
}

export default App;
