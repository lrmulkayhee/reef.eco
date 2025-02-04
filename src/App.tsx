import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import AboutPage from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import DashboardPage from './pages/DashboardPage';
import DataCollectionPage from './pages/DataCollectionPage';
import SOPs from './pages/SOPs';
import Partners from './pages/Partners';
import ContextPage from './pages/ContextPage';
import AssessmentsPage from './pages/AssessmentsPage';
import ReportsPage from './pages/ReportsPage';
import SettingsPage from './pages/SettingsPage';
import HelpPage from './pages/HelpPage';
import { AuthProvider } from './context/AuthContext';
import './styles/main.css';

const App: React.FC = () => {
    return (
        <AuthProvider>
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
                                <li><a href="/data-collection">Data Collection</a></li>
                                <li><a href="/sops">SOPs</a></li>
                                <li><a href="/partners">Partners</a></li>
                                <li><a href="/context">Context</a></li>
                                <li><a href="/assessments">Assessments</a></li>
                                <li><a href="/reports">Reports</a></li>
                                <li><a href="/settings">Settings</a></li>
                                <li><a href="/help">Help</a></li>
                            </ul>
                        </nav>
                    </header>
                    <main>
                        <Switch>
                            <Route path="/" exact component={Home} />
                            <Route path="/about" component={AboutPage} />
                            <Route path="/contact" component={Contact} />
                            <Route path="/login" component={Login} />
                            <Route path="/register" component={Register} />
                            <Route path="/profile" component={Profile} />
                            <Route path="/dashboard" component={DashboardPage} />
                            <Route path="/data-collection" component={DataCollectionPage} />
                            <Route path="/sops" component={SOPs} />
                            <Route path="/partners" component={Partners} />
                            <Route path="/context" component={ContextPage} />
                            <Route path="/assessments" component={AssessmentsPage} />
                            <Route path="/reports" component={ReportsPage} />
                            <Route path="/settings" component={SettingsPage} />
                            <Route path="/help" component={HelpPage} />
                        </Switch>
                    </main>
                </div>
            </Router>
        </AuthProvider>
    );
};

export default App;