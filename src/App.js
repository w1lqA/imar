import React, { useEffect } from 'react';
import CareerPage from './pages/CareerPage';
import Navbar from './components/Navbar';
import ProjectPage from './pages/ProjectPage';
import MainPage from './pages/MainPage';
import ServicePage from './pages/ServicePage';
import ProjectsPage from './pages/ProjectsPage';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import ServicesPage from './pages/ServicesPage';
import { ContactsWidget } from './components/ContactsWidget';

const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projectPages = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
  const servicePages = [1,2,3];
  
  return (
    <div className='max-w-screen-3xl mx-auto overflow-x-hidden'>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={MainPage} />
          <Route exact path='/projects' component={ProjectsPage} />
          <Route exact path='/services' component={ServicesPage} />
          {projectPages.map((page) => (
            <Route 
              key={`project${page}`}
              exact 
              path={`/project${page}`} 
              render={() => <ProjectPage page={page} />} 
            />
          ))}
          {servicePages.map((page) => (
            <Route 
              key={`service${page}`}
              exact 
              path={`/service${page}`} 
              render={() => <ServicePage page={page} />} 
            />
          ))}
          <Route exact path='/career' component={CareerPage} />
        </Switch>
        <ContactsWidget />
      </Router>
    </div>
  );
};

export default App;