import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import HomePage from './pages/home';
// import ProductsPage from './pages/products';
import CakrawalaITPage from './pages/cakrawalaIT';
import TemuKarierPage from './pages/temuKarier';
import BelajarYukPage from './pages/belajarYuk';
import KomunitasPage from './pages/komunitas';
import UserProfilePage from './pages/userProfile';

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
  // {
  //   path: "/products",
  //   element: <ProductsPage />,
  // },
  {
    path: "/cakrawalait",
    element: <CakrawalaITPage />,
  },
  {
    path: "/temukarier",
    element: <TemuKarierPage />,
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
]);


const rootElement = document.getElementById('root') as HTMLElement;
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
