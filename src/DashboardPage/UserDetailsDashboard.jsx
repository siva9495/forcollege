import React from 'react';
import { User, Calendar, FileText, Camera, Upload } from 'lucide-react';
import NavSideBar from './NavSideBar';

const UserDetailsDashboard = () => {
  return (
    <div
      className="min-h-screen flex flex-col sm:flex-row"
      style={{
        background: `
          radial-gradient(circle at bottom right, rgba(80, 54, 41, 1) 20%, rgba(0, 0, 0, 1) 70%),
          radial-gradient(circle at top right, rgba(150, 75, 0, 1) 10%, rgba(0, 0, 0, 1) 80%)
        `,
      }}
    >
      {/* Sidebar */}
      <NavSideBar />

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-auto">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-amber-600">
              Candidate Dashboard
            </h2>
            <p className="text-amber-100/60 mt-2">
              Manage your profile and track your application progress
            </p>
          </div>

          {/* Dashboard Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Candidate Details Card */}
            <div className="bg-black/30 rounded-xl p-6 backdrop-blur-lg border border-white/10 shadow-xl hover:border-amber-600/30 transition-all group">
              <div className="flex items-center gap-4 mb-6">
                <User className="text-amber-400 w-6 h-6" />
                <h3 className="text-xl font-semibold text-amber-200 group-hover:text-amber-400 transition-colors">
                  Candidate Details
                </h3>
              </div>

              <div className="space-y-4 text-amber-100/80">
                <div>
                  <span className="text-amber-200/60 text-sm">Name</span>
                  <p className="font-medium">Kadiyala Siva Prasad</p>
                </div>
                <div>
                  <span className="text-amber-200/60 text-sm">Email</span>
                  <p>sivaprasad.ksp01@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Upcoming Interviews Card */}
            <div className="bg-black/30 rounded-xl p-6 backdrop-blur-lg border border-white/10 shadow-xl hover:border-amber-600/30 transition-all group">
              <div className="flex items-center gap-4 mb-6">
                <Calendar className="text-amber-400 w-6 h-6" />
                <h3 className="text-xl font-semibold text-amber-200 group-hover:text-amber-400 transition-colors">
                  Upcoming Interviews
                </h3>
              </div>

              <div className="text-amber-100/80">
                <p>No interviews scheduled at the moment</p>
              </div>
            </div>

            {/* Profile Photo Card */}
            <div className="bg-black/30 rounded-xl p-6 backdrop-blur-lg border border-white/10 shadow-xl hover:border-amber-600/30 transition-all group">
              <div className="flex items-center gap-4 mb-6">
                <Camera className="text-amber-400 w-6 h-6" />
                <h3 className="text-xl font-semibold text-amber-200 group-hover:text-amber-400 transition-colors">
                  Profile Photo
                </h3>
              </div>

              <div className="flex flex-col items-center space-y-4">
                <img
                  src="https://www.w3schools.com/howto/img_avatar.png"
                  alt="Profile"
                  className="w-32 h-32 rounded-full object-cover border-4 border-amber-600/30"
                />
                <p className="text-amber-100/60 text-sm">JPG or PNG, max 50 KB</p>
                <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-amber-600/20 to-amber-800/20 text-amber-200 border border-amber-600/30 hover:from-amber-600 hover:to-amber-800 hover:text-white transition-all flex items-center gap-2">
                  <Upload className="w-4 h-4" />
                  Upload Photo
                </button>
              </div>
            </div>

            {/* Resume Card */}
            <div className="bg-black/30 rounded-xl p-6 backdrop-blur-lg border border-white/10 shadow-xl hover:border-amber-600/30 transition-all group">
              <div className="flex items-center gap-4 mb-6">
                <FileText className="text-amber-400 w-6 h-6" />
                <h3 className="text-xl font-semibold text-amber-200 group-hover:text-amber-400 transition-colors">
                  Resume
                </h3>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-amber-100/80">sivaprasad_resume.pdf</p>
                    <p className="text-amber-100/60 text-sm">Last updated: 21-11-2024 12:49:59 PM</p>
                  </div>
                  <div className="space-x-2">
                    <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-amber-600/20 to-amber-800/20 text-amber-200 border border-amber-600/30 hover:from-amber-600 hover:to-amber-800 hover:text-white transition-all">
                      View
                    </button>
                    <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-amber-600/20 to-amber-800/20 text-amber-200 border border-amber-600/30 hover:from-amber-600 hover:to-amber-800 hover:text-white transition-all flex items-center gap-2">
                      <Upload className="w-4 h-4" />
                      Upload
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsDashboard;
