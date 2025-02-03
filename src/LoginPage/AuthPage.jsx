import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Mail, Lock, User, ArrowLeft } from 'lucide-react';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const navigate = useNavigate();

  const handleCurrentJobs = () => {
    navigate('/');
  };
  

  return (
    <div 
      className="min-h-screen flex flex-col"
      style={{
        background: `
          radial-gradient(circle at bottom right, rgba(80, 54, 41, 1) 20%, rgba(0, 0, 0, 1) 70%),
          radial-gradient(circle at top right, rgba(150, 75, 0, 1) 10%, rgba(0, 0, 0, 1) 80%)
        `
      }}
    >
      {/* Navigation Bar */}
      <nav className="p-6 bg-gradient-to-t from-[#503629] to-[#964b00]/5 backdrop-blur-md border-b border-white/20 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-amber-600">
            CBIT Careers
          </h1>
          <div className="space-x-8">
            <button className="px-6 py-2 rounded-full bg-gradient-to-r from-amber-600 to-amber-800 text-white hover:from-amber-700 hover:to-amber-900 transition-all transform hover:scale-105 shadow-lg" onClick={handleCurrentJobs}>
              Current Jobs
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Welcome Text */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-amber-600">
                Welcome to Your Career Journey
              </h2>
              <p className="text-amber-100/80 text-lg leading-relaxed">
                Join our platform to discover exciting opportunities and take the next step in your professional growth.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-amber-600/20 flex items-center justify-center">
                  <ChevronRight className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-amber-200 font-semibold">Personalized Job Matches</h3>
                  <p className="text-amber-100/60">Find opportunities that align with your skills</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-amber-600/20 flex items-center justify-center">
                  <ChevronRight className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-amber-200 font-semibold">Career Development</h3>
                  <p className="text-amber-100/60">Access resources to grow professionally</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Auth Form */}
          <div className="bg-black/30 rounded-2xl p-8 backdrop-blur-lg border border-white/10 shadow-xl">
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-bold text-amber-200 mb-2">
                {isLogin ? 'Sign In to Your Account' : 'Create Your Account'}
              </h2>
              <p className="text-amber-100/60">
                {isLogin ? 'Welcome back!' : 'Start your journey with us'}
              </p>
            </div>

            <form className="space-y-6">
              {!isLogin && (
                <div className="relative">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-amber-600/60 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full pl-12 pr-4 py-3 rounded-lg bg-white/5 border border-amber-600/20 text-amber-100 placeholder-amber-100/50 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                  />
                </div>
              )}

              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-amber-600/60 w-5 h-5" />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full pl-12 pr-4 py-3 rounded-lg bg-white/5 border border-amber-600/20 text-amber-100 placeholder-amber-100/50 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                />
              </div>

              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-amber-600/60 w-5 h-5" />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full pl-12 pr-4 py-3 rounded-lg bg-white/5 border border-amber-600/20 text-amber-100 placeholder-amber-100/50 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                />
              </div>

              {!isLogin && (
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-amber-600/60 w-5 h-5" />
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="w-full pl-12 pr-4 py-3 rounded-lg bg-white/5 border border-amber-600/20 text-amber-100 placeholder-amber-100/50 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
                  />
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-gradient-to-r from-amber-600 to-amber-800 text-white font-semibold hover:from-amber-700 hover:to-amber-900 transform hover:scale-[1.02] transition-all duration-200 shadow-lg"
              >
                {isLogin ? 'Sign In' : 'Create Account'}
              </button>

              <div className="text-center">
                <button
                  type="button"
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-amber-200 hover:text-amber-400 text-sm transition-colors"
                >
                  {isLogin ? 'Need an account? Sign up' : 'Already have an account? Sign in'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;