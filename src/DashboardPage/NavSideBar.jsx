import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { 
  Home, Briefcase, UserCheck, BookOpen, 
  Clipboard, Cpu, BarChart2, User, Upload, 
  ChevronsLeft, ChevronsRight 
} from 'lucide-react';

const NavSideBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();

  const sidebarItems = [
    { label: 'Dashboard', icon: Home, link: '/dashboard/user-details' },
    { label: 'Current Jobs', icon: Briefcase, link: '/dashboard/current-jobs' },
    { label: 'Applied Jobs', icon: UserCheck, link: '/dashboard/applied-jobs' },
    { label: 'Personal Details', icon: User, link: '/dashboard/personal-details' },
    { label: 'Qualification Details', icon: BookOpen, link: '/dashboard/qualification-details' },
    { label: 'Work Experience', icon: Clipboard, link: '/dashboard/work-experience' },
    { label: 'Productivity Details', icon: Cpu, link: '/dashboard/productivity-details' },
    { label: 'Reference Details', icon: BarChart2, link: '/dashboard/reference-details' },
    { label: 'Documents Upload', icon: Upload, link: '/dashboard/documents-upload' },
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div 
      className={`
        h-screen fixed left-0 top-0 
        bg-gradient-to-b from-[#503629] to-[#964b00]/5 
        backdrop-blur-md 
        border-r border-white/10 
        shadow-lg 
        transition-all duration-300 
        ${isSidebarOpen ? 'w-64' : 'w-20'}
        overflow-hidden
      `}
    >
      {/* Sidebar Header */}
      <div className="flex items-center justify-between p-4 border-b border-white/10">
        {isSidebarOpen && (
          <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-amber-600">
            CBIT Careers
          </h1>
        )}
        
        <button 
          onClick={toggleSidebar} 
          className="text-amber-200 hover:text-amber-400 transition-colors"
        >
          {isSidebarOpen ? <ChevronsLeft /> : <ChevronsRight />}
        </button>
      </div>

      {/* Navigation Items */}
      <nav className="mt-4">
        <ul>
          {sidebarItems.map((item, index) => (
            <li 
              key={index} 
              className="group"
            >
              <Link 
                to={item.link} 
                className={`
                  flex items-center p-3 
                  ${location.pathname === item.link 
                    ? 'bg-amber-600/20 border-r-4 border-amber-600' 
                    : 'hover:bg-black/20'}
                  transition-all duration-300
                `}
              >
                <item.icon 
                  className={`
                    w-5 h-5 
                    ${location.pathname === item.link 
                      ? 'text-amber-400' 
                      : 'text-amber-200/60 group-hover:text-amber-300'}
                    transition-colors
                  `}
                />
                {isSidebarOpen && (
                  <span 
                    className={`
                      ml-3 
                      ${location.pathname === item.link 
                        ? 'text-amber-200 font-semibold' 
                        : 'text-amber-100/80 group-hover:text-amber-200'}
                      transition-colors
                    `}
                  >
                    {item.label}
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavSideBar;