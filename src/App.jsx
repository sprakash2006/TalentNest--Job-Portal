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
import ProtectedRoute from "../src/components/protected-route.jsx"


const router = createBrowserRouter([
  {
    element: <AppLayout/>,
    children:[
      {
      path: '/',
      element:<LandingPage/>
      },
      {
      path: '/onBoarding',
      element:(
        <ProtectedRoute>
          <OnBoarding/>
        </ProtectedRoute>
      ) 
      },
      {
      path: '/Jobs',
      element:(
        <ProtectedRoute>
          <JobListing />
        </ProtectedRoute>
      ) 
      },
      {
      path: '/job/:id',
      element:(
        <ProtectedRoute>
          <JobPage />
        </ProtectedRoute>
      ) 
      },
      {
      path: '/post-job',
      element:(
        <ProtectedRoute>
          <PostJobs />
        </ProtectedRoute>
      ) 
      },
      {
      path: '/saved-jobs',
      element:(
        <ProtectedRoute>
          <SavedJobs/>
        </ProtectedRoute>
      ) 
      },
      {
      path: '/my-jobs',
      element:(
        <ProtectedRoute>
          <MyJobs/>
        </ProtectedRoute>
      ) 
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
