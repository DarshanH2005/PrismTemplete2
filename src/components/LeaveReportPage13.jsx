import React from 'react';
import NavigationBar from './NavigationBar';
import UserProfileSection from './UserProfileSection';
import LeaveTable from './LeaveTable';
import { getTableConfig } from './LeaveTableConfigs';

const LeaveReportPage13 = () => {
  return (
    <>
      <NavigationBar />
      <UserProfileSection />
      {/* Leave table for route 13 */}
      <div style={{ padding: '0 16px' }}>
        <LeaveTable {...getTableConfig(13)} />
      </div>
    </>
  );
};

export default LeaveReportPage13;
