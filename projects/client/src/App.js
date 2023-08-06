import React from 'react';
import {ChakraProvider} from '@chakra-ui/react'
import './App.css'
import { Route, Routes } from "react-router-dom";


// Components
import Login from './components/Auth/LoginForm';
import ForgotPassword from './components/Auth/ForgotPasswordForm';
import ResetPasswordForm from './components/Auth/ResetPasswordFrom';
import DashboardAdmin from './pages/DashboardAdmin';
import Sidebar from './components/DashboardAdmin/Sidebar.jsx'
// import VerificationPage from './components/VerificationPage';
// import LoginForm from './components/components_landingpage/LoginForm';
// import ChangePasswordForm from './components/ChangePasswordForm';
// import BloggingFeature from './components/BloggingFeature';
// import ArticleDetailPage from './components/ArticleDetailPage';
// import Navbar from './components/Navbar';
// import ProfileUpdateForm from './components/ProfileUpdateForm';
// import ProfilePage from './components/components_profilepage/ProfilePage';
// import BlogSection from './components/components_landingpage/BlogSection';
// import CategoryPage from './components/components_landingpage/sectionCategori';
// import EditMobilePhone from './components/components_profilepage/EditMobilePhone';
// import VerifChangeEmail from './components/components_profilepage/VerifEmail';





export default function App() {
  return (
    <ChakraProvider>
      
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/forgotpassword" element={<ForgotPassword/>} />
        <Route path="/reset-password/:token" element={<ResetPasswordForm/>} />
        <Route path="/dashboard-admin" element={<DashboardAdmin/>} />
        {/* <Route path="/sidebar" element={<Sidebar/>} /> */}
        {/* <Route path="/login" element={<LoginForm/>} /> */}
        {/* <Route path="/change-password" element={<ChangePasswordForm/>} /> */}
        {/* <Route path="/profile" element={<ProfileUpdateForm/>} />  */}
        {/* <Route path="/blogging" element={<BloggingFeature/>} /> */}
        {/* <Route path="/article" element={<ArticleDetailPage/>} /> */}
        {/* <Route path="/profileUpdateForm" element={<ProfileUpdateForm/>} /> */}
        {/* <Route path="/profilePage" element={<ProfilePage/>} /> */}
        {/* <Route path="/blogsection" element={<BlogSection/>} /> */}
        {/* <Route path="/categoryPage" element={<CategoryPage/>} /> */}
        {/* <Route path="/editMobilePhone" element={<EditMobilePhone/>} /> */}
        {/* <Route path="/verification-change-email/:token" element={<VerifChangeEmail/>} /> */}
      </Routes>
    </ChakraProvider>
  );
}

