import './App.css';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import {Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';


import {Router} from 'react-router-dom';
import ReactGA from 'react-ga';
import {createBrowserHistory} from 'history';

function App() {
    const history = createBrowserHistory();

    history.listen(location => {
        ReactGA.initialize('G-QK4RZWGQV9');
        ReactGA.set({ page: location.pathname }); // Update the user's current page
        ReactGA.pageview(location.pathname); // Record a pageview for the given page
    });


    return (

        <Router history={history}>
            <>
                <Navbar/>
                <Switch>
                    <Route exact path={"/"} component={Home}/>
                    <Route exact path={"/rooms"} component={Rooms}/>
                    <Route exact path={"/rooms/:slug"} component={SingleRoom}/>
                    <Route component={Error}/>
                </Switch>
            </>
        </Router>
    );
}

export default App;
