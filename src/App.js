import React, { useEffect } from 'react';

import CareerPage from './pages/CareerPage';
import Navbar from './components/Navbar';
import ProjectPage from './pages/ProjectPage';
import MainPage from './pages/MainPage';
import ServicePage from './pages/ServicePage';
import ProjectsPage from './pages/ProjectsPage';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ServicesPage from './pages/ServicesPage';
import { ContactsWidget } from './components/ContactsWidget';



const App = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  useEffect(() => {
    document.title = 'IMAR GROUP';
  }, []);

  const projectPages = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]
  const servicePages = [1,2,3]
  return (
    <div className='max-w-screen-3xl mx-auto overflow-x-hidden'>
      <Router>
        <Navbar />
        <Routes>
            <Route exact path='/' element={<MainPage/>} />
            <Route exact path='/projects' element={<ProjectsPage/>} />
            <Route exact path='/services' element={<ServicesPage/>} />
            {projectPages.map((page) => (
              <Route exact path={`/project${page}`} element={<ProjectPage page={page}/>} />
            ))}
            {servicePages.map((page) => (
              <Route exact path={`/service${page}`} element={<ServicePage page={page}/>} />
            ))}
            <Route exact path='/career' element={<CareerPage/>} />
        </Routes>
        <ContactsWidget/>
      </Router>
    </div>
  );
};

export default App;