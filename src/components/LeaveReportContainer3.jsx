import React from 'react';
import '../styles/RequiredInfo.css';
import '../styles/formControls.css';
import LeaveApplicationHeader from './LeaveApplicationHeader';
import LeaveTable from './LeaveTable';
import { getTableConfig } from './LeaveTableConfigs.jsx';

const LeaveReportContainer3 = () => {
  const tableConfig = getTableConfig(3);
  
  return (
    <div className="visa-form">
      <LeaveApplicationHeader />
      <div style={{ marginTop: '20px' }}>
        <LeaveTable 
          columns={tableConfig.columns}
          defaultData={tableConfig.defaultData}
          title="Leave List"
        />
      </div>
    </div>
  );
};

export default LeaveReportContainer3;