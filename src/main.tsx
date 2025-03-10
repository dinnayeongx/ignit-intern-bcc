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
import ModulList from './pages/modulList';
import ModulPage from './pages/modulPage';
import MateriPage from './pages/materi';
import KomunitasPage from './pages/komunitas';
import UserProfilePage from './pages/userProfile';
import UIUXPage from './pages/uiux';
import TemuKarierMagangPage from './pages/temuKarierMagang';
import TemuKarierBootcampPage from './pages/temuKarierBootcamp';
import Scroll from './components/fragments/scroll';
import TambahProject from './pages/tambahProject';


const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
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
    path: "/belajaryuk/modul",
    element: <ModulList />,
  },
  {
    path: "/belajaryuk/modul/modul-ui-ux",
    element: <ModulPage />,
  },
  {
    path: "/belajaryuk/modul/modul-ui-ux/materi",
    element: <MateriPage />,
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
    path: "/userprofile/tambah-project",
    element: <TambahProject />,
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
