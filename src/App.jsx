import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from 'react';
import { ThemeProvider } from './components/theme-provider.jsx';
import React from 'react';
import './App.css';
import LandingPage from './pages/landing';
import AppLayout from './layouts/app-layout';
import OnBoarding from './pages/OnBoarding';
import JobListing from './pages/job-listing';
import JobPage from './pages/job';
import PostJobs from './pages/post-job';
import SavedJobs from './pages/saved-jobs';
import MyJobs from './pages/my-jobs';


const router = createBrowserRouter([
  {
    element: <AppLayout/>,
    children:[
      {
      path: '/',
      element: <LandingPage/>
      },
      {
      path: '/onBoarding',
      element: <OnBoarding/>
      },
      {
      path: '/Jobs',
      element: <JobListing />
      },
      {
      path: '/job/:id',
      element: <JobPage />
      },
      {
      path: '/post-job',
      element: <PostJobs />
      },
      {
      path: '/saved-jobs',
      element: <SavedJobs/>
      },
      {
      path: '/my-jobs',
      element: <MyJobs/>
      },

    ],
  },
]);

function App() {

  return <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
  <RouterProvider router = {router} />
  </ThemeProvider>
}

export default App
