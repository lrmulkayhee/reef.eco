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
import ProjectPlanning from './components/ProjectPlanning';
import DataPreservation from './components/DataPreservation';
import DataAccess from './components/DataAccess';
import DataVisualization from './components/DataVisualization';
import DataEntryForm from './components/DataEntryForm';
import QualityControl from './components/QualityControl';
import DataStorage from './components/DataStorage';
import MetadataDocumentation from './components/MetadataDocumentation';
import DataArchiving from './components/DataArchiving';
import MetadataGeneration from './components/MetadataGeneration';
import DoiIssuance from './components/DoiIssuance';
import DatasetEmbargoing from './components/DatasetEmbargoing';
import DataCuration from './components/DataCuration';
import DataAnalysis from './components/DataAnalysis';
import DataSharing from './components/DataSharing';
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
                                <li><a href="/project-planning">Project Planning</a></li>
                                <li><a href="/data-preservation">Data Preservation</a></li>
                                <li><a href="/data-access">Data Access</a></li>
                                <li><a href="/data-visualization">Data Visualization</a></li>
                                <li><a href="/data-entry">Data Entry</a></li>
                                <li><a href="/quality-control">Quality Control</a></li>
                                <li><a href="/data-storage">Data Storage</a></li>
                                <li><a href="/metadata-documentation">Metadata Documentation</a></li>
                                <li><a href="/data-archiving">Data Archiving</a></li>
                                <li><a href="/metadata-generation">Metadata Generation</a></li>
                                <li><a href="/doi-issuance">DOI Issuance</a></li>
                                <li><a href="/dataset-embargoing">Dataset Embargoing</a></li>
                                <li><a href="/data-curation">Data Curation</a></li>
                                <li><a href="/data-analysis">Data Analysis</a></li>
                                <li><a href="/data-sharing">Data Sharing</a></li>
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
                            <Route path="/project-planning" component={ProjectPlanning} />
                            <Route path="/data-preservation" component={DataPreservation} />
                            <Route path="/data-access" component={DataAccess} />
                            <Route path="/data-visualization" component={DataVisualization} />
                            <Route path="/data-entry" component={DataEntryForm} />
                            <Route path="/quality-control" component={QualityControl} />
                            <Route path="/data-storage" component={DataStorage} />
                            <Route path="/metadata-documentation" component={MetadataDocumentation} />
                            <Route path="/data-archiving" component={DataArchiving} />
                            <Route path="/metadata-generation" component={MetadataGeneration} />
                            <Route path="/doi-issuance" component={DoiIssuance} />
                            <Route path="/dataset-embargoing" component={DatasetEmbargoing} />
                            <Route path="/data-curation" component={DataCuration} />
                            <Route path="/data-analysis" component={DataAnalysis} />
                            <Route path="/data-sharing" component={DataSharing} />
                        </Switch>
                    </main>
                </div>
            </Router>
        </AuthProvider>
    );
};

export default App;