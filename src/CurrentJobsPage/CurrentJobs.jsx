import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Building2, MapPin, Clock, Briefcase } from 'lucide-react';



const NavBar = ({ currentPage }) => {

    const navigate = useNavigate();

    const handleSignIn = () => {
    navigate('/signin');
    };

  return (
    <nav className="p-6 bg-gradient-to-t from-[#503629] to-[#964b00]/5 backdrop-blur-md border-b border-white/20 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-amber-600">
          CBIT Careers
        </h1>
        <div className="space-x-8">
          
            <button className="px-6 py-2 rounded-full bg-gradient-to-r from-amber-600 to-amber-800 text-white hover:from-amber-700 hover:to-amber-900 transition-all transform hover:scale-105 shadow-lg" onClick={handleSignIn}>
              Sign In
            </button>
        
        </div>
      </div>
    </nav>
  );
};

const JobCard = ({ title, department, reference, experience, positions }) => {
  return (
    <div className="bg-black/30 rounded-xl p-6 backdrop-blur-lg border border-white/10 shadow-xl hover:border-amber-600/30 transition-all group">
      <div className="space-y-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Building2 className="text-amber-400 w-4 h-4" />
            <span className="text-amber-200/60 text-sm">Campus: Hyderabad</span>
          </div>
          <h3 className="text-xl font-semibold text-amber-200 group-hover:text-amber-400 transition-colors">{title}</h3>
          <p className="text-amber-100/60">{department}</p>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-amber-100/80">
            <Briefcase className="w-4 h-4" />
            <span>Job Reference No.: {reference}</span>
          </div>
          <div className="flex items-center gap-2 text-amber-100/80">
            <Clock className="w-4 h-4" />
            <span>Experience: {experience}</span>
          </div>
          <div className="flex items-center gap-2 text-amber-100/80">
            <MapPin className="w-4 h-4" />
            <span>No. of positions: {positions}</span>
          </div>
        </div>

        <button className="w-full py-2 px-4 rounded-lg bg-gradient-to-r from-amber-600/20 to-amber-800/20 text-amber-200 border border-amber-600/30 hover:from-amber-600 hover:to-amber-800 hover:text-white transition-all">
          More details
        </button>
      </div>
    </div>
  );
};

const CurrentJobs = () => {
  const jobs = [
    {
      title: "Video Editor",
      department: "Directorate of Communication",
      reference: "CBIT Exam-JP/00040",
      experience: "2 to 5 years",
      positions: "1"
    },
    {
      title: "Social Media Manager",
      department: "Directorate of Communication",
      reference: "CBIT Exam-JP/00039",
      experience: "3 to 4 years",
      positions: "1"
    },
    {
      title: "Content Writer",
      department: "Directorate of Communication",
      reference: "CBIT Exam-JP/00038",
      experience: "2 to 4 years",
      positions: "1"
    },
    {
      title: "Graphic Designer",
      department: "Directorate of Communication",
      reference: "CBIT Exam-JP/00042",
      experience: "2 to 4 years",
      positions: "1"
    },
    {
      title: "Cinematographer",
      department: "Directorate of Communication",
      reference: "CBIT Exam-JP/00041",
      experience: "3 to 5 years",
      positions: "1"
    },
    {
      title: "Senior Public Relations Specialist",
      department: "Directorate of Communication",
      reference: "CBIT Exam-JP/00037",
      experience: "5 to 7 years",
      positions: "1"
    }
  ];

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
      <NavBar currentPage="jobs" />
      
      <div className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-amber-600">
              Current Openings
            </h2>
            <p className="text-amber-100/60 mt-2">
              Discover your next career opportunity with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job, index) => (
              <JobCard key={index} {...job} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentJobs;