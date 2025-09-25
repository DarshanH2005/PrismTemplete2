import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/RequiredInfo.css';
import '../styles/formControls.css';
import LeaveApplicationHeader from './LeaveApplicationHeader';
import LeaveTable from './LeaveTable';
import { getTableConfig } from './LeaveTableConfigs.jsx';

const LeaveFormContainer = () => {
  const location = useLocation();
  
  // Extract route number from pathname (e.g., '/2' -> 2)
  const routeMatch = location.pathname.match(/^\/(\d+)$/);
  const routeNumber = routeMatch ? parseInt(routeMatch[1]) : 1;
  
  // Get table configuration for current route
  const tableConfig = getTableConfig(routeNumber);
  
  // Show table for routes 2-12
  const shouldShowTable = routeNumber >= 2 && routeNumber <= 15;

  return (
    <div className="visa-form">
      <LeaveApplicationHeader />
      {shouldShowTable && (
        <div style={{ marginTop: '24px' }}>
          <LeaveTable 
            columns={tableConfig.columns}
            defaultData={tableConfig.defaultData}
            title="Leave List"
          />
        </div>
      )}
    </div>
  );
};

export default LeaveFormContainer;
