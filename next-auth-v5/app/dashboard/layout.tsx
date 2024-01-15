import React from 'react';

//the layout code is rendered by default on all pages inside this folder
const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  //childrens are the pages inside the dashboard folder - dashboard/pages.tsx and dashboard/settings/pages.tsx

  return (
    <div className='flex flex-col gap-y-4'>
      <nav className='bg-black text-white'>
        This is a shared navbar for dashboard segment
      </nav>
      {children}
    </div>
  );
};

export default DashboardLayout;
