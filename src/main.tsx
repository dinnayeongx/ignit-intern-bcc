import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import HomePage from './pages/home';
import CakrawalaITPage from './pages/cakrawalaIT';
import TemuKarierPage from './pages/temuKarier';
import TemuKarierProjectPage from './pages/temuKarierProject';
import ProjectPage from './pages/project';
import BelajarYukPage from './pages/belajarYuk';
import KomunitasPage from './pages/komunitas';
import UserProfilePage from './pages/userProfile';
import UIUXPage from './pages/uiux';
import TemuKarierMagangPage from './pages/temuKarierMagang';
import TemuKarierBootcampPage from './pages/temuKarierBootcamp';
import Scroll from './components/fragments/scroll';


const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World</div>,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/belajaryuk",
    element: <BelajarYukPage />,
  },
  {
    path: "/komunitas",
    element: <KomunitasPage />,
  },
  {
    path: "/userprofile",
    element: <UserProfilePage />,
  },
  {
    path: "/temukarier",
    element: <TemuKarierPage />,
  },
  {
    path: "/temukarier/bootcamp",
    element: <TemuKarierBootcampPage />,
  },
  {
    path: "/temukarier/magang",
    element: <TemuKarierMagangPage />,
  },
  {
    path: "/temukarier/project",
    element: <TemuKarierProjectPage />,
  },
  {
    path: "/temukarier/project/project-detail",
    element: <ProjectPage />,
  },
  {
    path: "/cakrawalait",
    element: <CakrawalaITPage />,
  },
  {
    path: "/cakrawalait/ui-ux",
    element: <UIUXPage />,
  }

]);


const rootElement = document.getElementById('root') as HTMLElement;
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <Scroll/>
    </RouterProvider>
  </React.StrictMode>
);
