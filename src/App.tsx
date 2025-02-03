import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Dashboard from './components/Dashboard';
import DataCollectionPage from './pages/DataCollectionPage';
import './styles/main.css';

const App: React.FC = () => {
    return (
        <Router>
            <div className="app">
                <header>
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/contact">Contact</a></li>
                            <li><a href="/login">Login</a></li>
                            <li><a href="/register">Register</a></li>
                            <li><a href="/profile">Profile</a></li>
                            <li><a href="/dashboard">Dashboard</a></li>
                            <li><a href="/data-collection">Data Collection</a></li> {/* Add link to Data Collection */}
                        </ul>
                    </nav>
                </header>
                <main>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/login" component={Login} />
                        <Route path="/register" component={Register} />
                        <Route path="/profile" component={Profile} />
                        <Route path="/dashboard" component={Dashboard} />
                        <Route path="/data-collection" component={DataCollectionPage} /> {/* Add route for Data Collection */}
                    </Switch>
                </main>
            </div>
        </Router>
    );
};

export default App;