import React from 'react';
import styles from './LeaveTable.module.css';

const LeaveTable = ({ 
  data = [], 
  columns = [],
  defaultData = [],
  title = 'Leave List'
}) => {
  // Default columns configuration if none provided
  const defaultColumns = [
    { key: 'leaveType', label: 'Leave Type', className: 'leaveTypeCol' },
    { key: 'appliedDate', label: 'Applied Date', className: 'appliedDateCol' },
    { key: 'leaveFrom', label: 'Leave From', className: 'leaveFromCol' },
    { key: 'leaveTo', label: 'Leave To', className: 'leaveToCol' },
    { key: 'noOfDays', label: 'No of Days', className: 'noOfDaysCol' }
  ];

  // Default data if none provided
  const fallbackData = [
    {
      id: 1,
      leaveType: 'CL',
      appliedDate: '30-June-2025',
      leaveFrom: '02-May-2025',
      leaveTo: '07-May-2025',
      noOfDays: 4
    },
    {
      id: 2,
      leaveType: 'SL',
      appliedDate: '30-June-2025',
      leaveFrom: '08-May-2025',
      leaveTo: '14-May-2025',
      noOfDays: 5
    },
    {
      id: 3,
      leaveType: 'PL',
      appliedDate: '30-June-2025',
      leaveFrom: '15-May-2025',
      leaveTo: '15-May-2025',
      noOfDays: 1
    }
  ];

  const activeColumns = columns.length > 0 ? columns : defaultColumns;
  const tableData = data.length > 0 ? data : (defaultData.length > 0 ? defaultData : fallbackData);

  return (
    <div className={styles.tableContainer}>
      {/* Content Header */}
      <div className={styles.contentHeader}>
        <h3 className={styles.tableTitle}>{title}</h3>
      </div>

      {/* Table Frame */}
      <div className={styles.tableFrame}>
        <div className={styles.tableWrapper}>
          {/* Table Header */}
          <div className={styles.tableHeader}>
            <div className={styles.headerContainer}>
              <div className={styles.headerRow}>
                {activeColumns.map((column) => (
                  <div 
                    key={column.key}
                    className={`${styles.headerCell} ${styles[column.className] || ''}`}
                  >
                    <span className={styles.headerLabel}>{column.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.headerSeparator}>
              <div className={styles.separatorLine}></div>
            </div>
          </div>

          {/* Table Body */}
          <div className={styles.tableBody}>
            {tableData.map((row, index) => (
              <div key={row.id || index} className={styles.tableRow}>
                <div className={styles.rowContainer}>
                  <div className={styles.rowGroup}>
                    <div className={styles.cellGroup}>
                      {activeColumns.map((column) => (
                        <div 
                          key={column.key}
                          className={`${styles.dataCell} ${styles[column.className] || ''}`}
                        >
                          {column.render ? column.render(row[column.key], row) : row[column.key]}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaveTable;