import React, { useState } from 'react';
import { Camera, User } from 'lucide-react';

type Page = 'welcome' | 'login' | 'signup' | 'settings';

interface UserData {
  fullName: string;
  phoneNumber: string;
  email: string;
  password: string;
  companyName: string;
  isAgency: boolean;
}

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('welcome');
  const [userData, setUserData] = useState<UserData>({
    fullName: '',
    phoneNumber: '',
    email: '',
    password: '',
    companyName: '',
    isAgency: false
  });
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userData.fullName || !userData.phoneNumber || !userData.email || !userData.password) {
      alert('Please fill in all required fields');
      return;
    }
    setCurrentPage('settings');
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!loginData.email || !loginData.password) {
      alert('Please enter both email and password');
      return;
    }
    if (loginData.email === userData.email && loginData.password === userData.password) {
      setCurrentPage('settings');
    } else {
      alert('Invalid credentials');
    }
  };

  const renderWelcomePage = () => (
    <div className="bg-white p-4 sm:p-8 w-full max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-2">Welcome to PopX</h1>
      <p className="text-gray-600 mb-6 sm:mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
      
      <button 
        onClick={() => setCurrentPage('signup')}
        className="w-full bg-[#6C25FF] text-white rounded-lg py-3 mb-3 font-medium text-sm sm:text-base"
      >
        Create Account
      </button>
      
      <button 
        onClick={() => setCurrentPage('login')}
        className="w-full bg-[#EEEBFF] text-[#6C25FF] rounded-lg py-3 font-medium text-sm sm:text-base"
      >
        Already Registered? Login
      </button>
    </div>
  );

  const renderLoginPage = () => (
    <div className="bg-white p-4 sm:p-8 w-full max-w-md mx-auto">
      <h1 className="text-xl sm:text-2xl font-bold mb-2">Signin to your PopX account</h1>
      <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
      
      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label className="block text-[#6C25FF] text-sm mb-1">Email Address</label>
          <input 
            type="email"
            placeholder="Enter email address"
            className="w-full p-2.5 sm:p-3 rounded-lg border border-gray-300 text-sm"
            value={loginData.email}
            onChange={(e) => setLoginData({...loginData, email: e.target.value})}
            required
          />
        </div>
        
        <div>
          <label className="block text-[#6C25FF] text-sm mb-1">Password</label>
          <input 
            type="password"
            placeholder="Enter password"
            className="w-full p-2.5 sm:p-3 rounded-lg border border-gray-300 text-sm"
            value={loginData.password}
            onChange={(e) => setLoginData({...loginData, password: e.target.value})}
            required
          />
        </div>
        
        <button 
          type="submit"
          className="w-full bg-gray-300 text-white rounded-lg py-3 mt-4 text-sm sm:text-base"
        >
          Login
        </button>
      </form>
    </div>
  );

  const renderSignupPage = () => (
    <div className="bg-white p-4 sm:p-8 w-full max-w-md mx-auto">
      <h1 className="text-xl sm:text-2xl font-bold mb-2">Create your PopX account</h1>
      
      <form onSubmit={handleSignup} className="space-y-4">
        <div>
          <label className="block text-[#6C25FF] text-sm mb-1">Full Name<span className="text-red-500">*</span></label>
          <input 
            type="text"
            placeholder="Enter your full name"
            className="w-full p-2.5 sm:p-3 rounded-lg border border-gray-300 text-sm"
            value={userData.fullName}
            onChange={(e) => setUserData({...userData, fullName: e.target.value})}
            required
          />
        </div>
        
        <div>
          <label className="block text-[#6C25FF] text-sm mb-1">Phone number<span className="text-red-500">*</span></label>
          <input 
            type="tel"
            placeholder="Enter your phone number"
            className="w-full p-2.5 sm:p-3 rounded-lg border border-gray-300 text-sm"
            value={userData.phoneNumber}
            onChange={(e) => setUserData({...userData, phoneNumber: e.target.value})}
            required
          />
        </div>
        
        <div>
          <label className="block text-[#6C25FF] text-sm mb-1">Email address<span className="text-red-500">*</span></label>
          <input 
            type="email"
            placeholder="Enter your email address"
            className="w-full p-2.5 sm:p-3 rounded-lg border border-gray-300 text-sm"
            value={userData.email}
            onChange={(e) => setUserData({...userData, email: e.target.value})}
            required
          />
        </div>
        
        <div>
          <label className="block text-[#6C25FF] text-sm mb-1">Password<span className="text-red-500">*</span></label>
          <input 
            type="password"
            placeholder="Create a password"
            className="w-full p-2.5 sm:p-3 rounded-lg border border-gray-300 text-sm"
            value={userData.password}
            onChange={(e) => setUserData({...userData, password: e.target.value})}
            required
          />
        </div>
        
        <div>
          <label className="block text-[#6C25FF] text-sm mb-1">Company name</label>
          <input 
            type="text"
            placeholder="Enter company name"
            className="w-full p-2.5 sm:p-3 rounded-lg border border-gray-300 text-sm"
            value={userData.companyName}
            onChange={(e) => setUserData({...userData, companyName: e.target.value})}
          />
        </div>
        
        <div>
          <p className="text-[#6C25FF] text-sm mb-2">Are you an Agency?<span className="text-red-500">*</span></p>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input 
                type="radio" 
                name="agency" 
                className="w-4 h-4 text-[#6C25FF]"
                checked={userData.isAgency}
                onChange={() => setUserData({...userData, isAgency: true})}
                required
              />
              <span className="ml-2 text-sm">Yes</span>
            </label>
            <label className="flex items-center">
              <input 
                type="radio" 
                name="agency" 
                className="w-4 h-4 text-[#6C25FF]"
                checked={!userData.isAgency}
                onChange={() => setUserData({...userData, isAgency: false})}
              />
              <span className="ml-2 text-sm">No</span>
            </label>
          </div>
        </div>
        
        <button 
          type="submit"
          className="w-full bg-[#6C25FF] text-white rounded-lg py-3 mt-4 text-sm sm:text-base"
        >
          Create Account
        </button>
      </form>
    </div>
  );

  const renderSettingsPage = () => (
    <div className="bg-white w-full min-h-screen">
      <div className="border-b px-4 py-3 sm:p-4">
        <h1 className="text-lg sm:text-xl font-medium">Account Settings</h1>
      </div>
      
      <div className="p-4 sm:p-6">
        <div className="flex items-start gap-3 sm:gap-4">
          <div className="relative">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gray-200 flex items-center justify-center">
              <User className="w-8 h-8 sm:w-10 sm:h-10 text-gray-500" />
            </div>
            <div className="absolute -bottom-1 -right-1 bg-[#6C25FF] rounded-full p-1">
              <Camera size={14} className="text-white sm:w-4 sm:h-4" />
            </div>
          </div>
          
          <div>
            <h2 className="font-medium text-base sm:text-lg">{userData.fullName}</h2>
            <p className="text-gray-600 text-sm">{userData.email}</p>
            {userData.companyName && (
              <p className="text-gray-500 text-xs sm:text-sm mt-1">{userData.companyName}</p>
            )}
          </div>
        </div>
        
        <div className="mt-5 sm:mt-6">
          <p className="text-gray-600 text-sm sm:text-base">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
          </p>
          {userData.isAgency && (
            <p className="text-[#6C25FF] mt-2 text-xs sm:text-sm">Agency Account</p>
          )}
          <p className="text-gray-500 mt-2 text-sm">Phone: {userData.phoneNumber}</p>
        </div>
      </div>
    </div>
  );

  const pages = {
    welcome: renderWelcomePage,
    login: renderLoginPage,
    signup: renderSignupPage,
    settings: renderSettingsPage,
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-0 sm:p-4">
      {pages[currentPage]()}
    </div>
  );
}

export default App;