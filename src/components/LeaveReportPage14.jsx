import React from 'react';
import NavigationBar from './NavigationBar';
import UserProfileSection from './UserProfileSection';
import LeaveTable from './LeaveTable';
import { getTableConfig } from './LeaveTableConfigs';

const LeaveReportPage14 = () => {
  return (
    <>
      <NavigationBar />
      <UserProfileSection />
      {/* Leave table for route 14 */}
      <div style={{ padding: '0 16px' }}>
        <LeaveTable {...getTableConfig(14)} />
      </div>
    </>
  );
};

export default LeaveReportPage14;
