import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutPage from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/authentication/Login';
import Register from './pages/authentication/Register';
import Profile from './pages/user/Profile';
import DashboardPage from './pages/dashboard/DashboardPage';
import DataCollectionPage from './pages/dashboard/DataCollectionPage';
import SOPs from './pages/information/SOPs';
import Partners from './pages/information/Partners';
import ContextPage from './pages/information/ContextPage';
import AssessmentsPage from './pages/dashboard/AssessmentsPage';
import ReportsPage from './pages/dashboard/ReportsPage';
import SettingsPage from './pages/user/SettingsPage';
import HelpPage from './pages/information/HelpPage';
import ProjectPlanning from './components/userManagement/ProjectPlanning';
import DataPreservation from './components/dataManagement/DataPreservation';
import DataAccess from './components/dataManagement/DataAccess';
import DataVisualization from './components/dataManagement/DataVisualization';
import DataEntryForm from './components/forms/DataEntryForm';
import QualityControl from './components/dataManagement/QualityControl';
import DataStorage from './components/dataManagement/DataStorage';
import MetadataDocumentation from './components/metadata/MetadataDocumentation';
import DataArchiving from './components/dataManagement/DataArchiving';
import MetadataGeneration from './components/metadata/MetadataGeneration';
import PrivacyPolicy from './pages/PrivacyPolicy';

const App: React.FC = () => {
    return (
        <Router>
            <Header />
            <div className="content">
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
                    <Route path="/privacy-policy" component={PrivacyPolicy} />
                </Switch>
            </div>
            <Footer />
        </Router>
    );
};

export default App;