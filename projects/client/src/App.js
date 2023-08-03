import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {ChakraProvider} from '@chakra-ui/react'
import './App.css'


// Components
import Login from './components/Auth/LoginForm';
import ForgotPassword from './components/Auth/ForgotPasswordForm'
// import VerificationPage from './components/VerificationPage';
// import LoginForm from './components/components_landingpage/LoginForm';
// import ChangePasswordForm from './components/ChangePasswordForm';
// import ResetPasswordPage from './components/ResetPasswordPage';
// import ForgotPassword from './components/ForgotPasswordPage';
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
      {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/forgotpassword" element={<ForgotPassword/>} />
        {/* <Route path="/verification/:token" element={<VerificationPage/>} />
        <Route path="/login" element={<LoginForm/>} />
        <Route path="/change-password" element={<ChangePasswordForm/>} />
        <Route path="/reset-password/:token" element={<ResetPasswordPage/>} />
        <Route path="/forgotpasword" element={<ForgotPassword/>} />
        <Route path="/profile" element={<ProfileUpdateForm/>} /> 
        <Route path="/blogging" element={<BloggingFeature/>} />
        <Route path="/article" element={<ArticleDetailPage/>} />
        <Route path="/profileUpdateForm" element={<ProfileUpdateForm/>} />
        <Route path="/profilePage" element={<ProfilePage/>} />
        <Route path="/blogsection" element={<BlogSection/>} />
        <Route path="/categoryPage" element={<CategoryPage/>} />
        <Route path="/editMobilePhone" element={<EditMobilePhone/>} />
        <Route path="/verification-change-email/:token" element={<VerifChangeEmail/>} /> */}
      </Routes>
    </ChakraProvider>
  );
}

