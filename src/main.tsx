import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './pages/login.tsx';
import RegisterPage from './pages/register.tsx';
import HomePage from './pages/home.tsx';
import CakrawalaITPage from './pages/cakrawalaIT.tsx';
import TemuKarierPage from './pages/temuKarier.tsx';
import TemuKarierProjectPage from './pages/temuKarierProject.tsx';
import ProjectPage from './pages/project.tsx';
import BelajarYukPage from './pages/belajarYuk.tsx';
import ModulList from './pages/modulList.tsx';
import ModulPage from './pages/modulPage.tsx';
import MateriPage from './pages/materi.tsx';
import KomunitasPage from './pages/komunitas.tsx';
import UserProfilePage from './pages/userProfile.tsx';
import UIUXPage from './pages/uiux.tsx';
import TemuKarierMagangPage from './pages/temuKarierMagang.tsx';
import TemuKarierDetail from './pages/temukarierdetail.tsx';
import TemuKarierBootcampPage from './pages/temuKarierBootcamp.tsx';
import Scroll from './components/fragments/scroll.tsx';
import TambahProject from './pages/tambahProject.tsx';
import MyProject from './pages/myProject.tsx';
import EditProject from './pages/editProject.tsx';


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
    path: "/userprofile/my-project",
    element: <MyProject />,
  },
  {
    path: "/userprofile/tambah-project",
    element: <TambahProject />,
  },
  {
    path: "/userprofile/edit-project",
    element: <EditProject />,
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
    path: "/temukarier/magang/detail",
    element: <TemuKarierDetail />,
  },
  {
    path: "/temukarier/project",
    element: <TemuKarierProjectPage />,
  },
  {
    path: "/temukarier/project/1",
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
