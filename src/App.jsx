import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import CV from './pages/CV';
import Projects from './pages/Projects';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<NavBar />}>
      <Route index element={<Home />} />
      <Route path="aboutme" element={<AboutMe />} />
      <Route path="cv" element={<CV />} />
      <Route path="projects" element={<Projects />} />
    </Route>
  )
)

function App({routes}) {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
