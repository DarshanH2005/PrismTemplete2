// LeaveTableConfigs.js - Configuration for different leave table types
import downloadIcon from '../assets/download-28.svg';

// Render function for attachment column with PDF icon
const renderAttachment = (value, row) => {
  if (value && value.includes('.pdf')) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <img src={downloadIcon} alt="PDF" style={{ width: '16px', height: '16px' }} />
        <span>{value}</span>
      </div>
    );
  }
  return value;
};

// Table configurations for different routes
export const TABLE_CONFIGS = {
  // Route 1 & 2 - Basic leave table with Applied Date
  route1: {
    columns: [
      { key: 'leaveType', label: 'Leave Type', className: 'leaveTypeCol' },
      { key: 'appliedDate', label: 'Applied Date', className: 'appliedDateCol' },
      { key: 'leaveFrom', label: 'Leave From', className: 'leaveFromCol' },
      { key: 'leaveTo', label: 'Leave To', className: 'leaveToCol' },
      { key: 'noOfDays', label: 'No of Days', className: 'noOfDaysCol' }
    ],
    defaultData: [
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
    ]
  },

  // Route 3 - Comp Off
  route3: {
    columns: [
      { key: 'leaveType', label: 'Leave Type', className: 'leaveTypeCol' },
      { key: 'leaveFrom', label: 'Leave From', className: 'leaveFromCol' },
      { key: 'leaveTo', label: 'Leave To', className: 'leaveToCol' },
      { key: 'RefDate', label: 'Ref Date', className: 'refDateCol' },
      { key: 'noOfDays', label: 'No of Days', className: 'noOfDaysCol' }
    ],
    defaultData: [
      {
        id: 1,
        leaveType: 'Comp Off',
        leaveFrom: '02-May-2025',
        leaveTo: '07-May-2025',
        RefDate: '30-June-2025',
        noOfDays: 4
      }
    ]
  },

  // Route 4 - Restricted Holiday
  route4: {
    columns: [
      { key: 'leaveType', label: 'Leave Type', className: 'leaveTypeCol' },
      { key: 'leaveFrom', label: 'Leave From', className: 'leaveFromCol' },
      { key: 'leaveTo', label: 'Leave To', className: 'leaveToCol' },
      { key: 'HolidayList', label: 'Holiday List', className: 'holidayListCol' },
      { key: 'noOfDays', label: 'No of Days', className: 'noOfDaysCol' }
    ],
    defaultData: [
      {
        id: 1,
        leaveType: 'Restricted Holiday',
        leaveFrom: '02-May-2025',
        leaveTo: '07-May-2025',
        HolidayList: 'Vara Mahalakshmi Vrata',
        noOfDays: 4
      }
    ]
  },

  // Route 5 - Bereavement Leave with Relation
  route5: {
    columns: [
      { key: 'leaveType', label: 'Leave Type', className: 'leaveTypeCol' },
      { key: 'leaveFrom', label: 'Leave From', className: 'leaveFromCol' },
      { key: 'leaveTo', label: 'Leave To', className: 'leaveToCol' },
      { key: 'Relation', label: 'Relation', className: 'relationCol' },
      { key: 'noOfDays', label: 'No of Days', className: 'noOfDaysCol' }
    ],
    defaultData: [
      {
        id: 1,
        leaveType: 'Bereavement Leave',
        leaveFrom: '02-May-2025',
        leaveTo: '07-May-2025',
        Relation: 'Father',
        noOfDays: 4
      }
    ]
  },

  // Route 6 - Simple leave without extra columns
  route6: {
    columns: [
      { key: 'leaveType', label: 'Leave Type', className: 'leaveTypeCol' },
      { key: 'leaveFrom', label: 'Leave From', className: 'leaveFromCol' },
      { key: 'leaveTo', label: 'Leave To', className: 'leaveToCol' },
      { key: 'noOfDays', label: 'No of Days', className: 'noOfDaysCol' }
    ],
    defaultData: [
      {
        id: 1,
        leaveType: 'Paternity Leave',
        leaveFrom: '02-May-2025',
        leaveTo: '07-May-2025',
        noOfDays: 4
      }
    ]
  },

  // Route 7 - Leave with Sub Categories
  route7: {
    columns: [
      { key: 'leaveType', label: 'Leave Type', className: 'leaveTypeCol' },
      { key: 'leaveFrom', label: 'Leave From', className: 'leaveFromCol' },
      { key: 'leaveTo', label: 'Leave To', className: 'leaveToCol' },
      { key: 'SubCategories', label: 'Sub Categories', className: 'subCategoriesCol' },
      { key: 'noOfDays', label: 'No of Days', className: 'noOfDaysCol' }
    ],
    defaultData: [
      {
        id: 1,
        leaveType: 'Special Leave',
        leaveFrom: '02-May-2025',
        leaveTo: '07-May-2025',
        SubCategories: 'Marriage Leave',
        noOfDays: 4
      }
    ]
  },

  // Route 8 - Training/Course Leave with multiple columns
  route8: {
    columns: [
      { key: 'leaveType', label: 'Leave Type', className: 'leaveTypeCol' },
      { key: 'leaveFrom', label: 'Leave From', className: 'leaveFromCol' },
      { key: 'leaveTo', label: 'Leave To', className: 'leaveToCol' },
      { key: 'SubCategories', label: 'Sub Categories', className: 'subCategoriesCol' },
      { key: 'Duration', label: 'Duration', className: 'durationCol' },
      { key: 'ProgramName', label: 'Program Name', className: 'programNameCol' },
      { key: 'Institute', label: 'Institute', className: 'instituteCol' },
      { key: 'CourseCommencement', label: 'Course Commencement', className: 'courseCommencementCol' }
    ],
    defaultData: [
      {
        id: 1,
        leaveType: 'Training Leave',
        leaveFrom: '02-May-2025',
        leaveTo: '07-May-2025',
        SubCategories: 'Technical Training',
        Duration: '5 days',
        ProgramName: 'Advanced React Development',
        Institute: 'Tech Institute',
        CourseCommencement: '02-May-2025'
      }
    ]
  },

  // Route 9 - Maternity Leave with Attachment
  route9: {
    columns: [
      { key: 'leaveType', label: 'Leave Type', className: 'leaveTypeCol' },
      { key: 'leaveFrom', label: 'Leave From', className: 'leaveFromCol' },
      { key: 'leaveTo', label: 'Leave To', className: 'leaveToCol' },
      { key: 'SubCategories', label: 'Sub Categories', className: 'subCategoriesCol' },
      { key: 'ExpectedDeliveryDate', label: 'Expected Delivery Date', className: 'expectedDeliveryDateCol' },
      { key: 'noOfDays', label: 'No of Days', className: 'noOfDaysCol' },
      { key: 'Attrachment', label: 'Attachment', className: 'attachmentCol', render: renderAttachment }
    ],
    defaultData: [
      {
        id: 1,
        leaveType: 'Compassionate Leave',
        leaveFrom: '02-May-2025',
        leaveTo: '07-May-2025',
        SubCategories: 'Maternity Leave Off',
        ExpectedDeliveryDate: '07-May-2025',
        noOfDays: 4,
        Attrachment: 'file.pdf'
      }
    ]
  },

  // Route 10 - Uses same as route 5 (Bereavement)
  route10: {
    columns: [
      { key: 'leaveType', label: 'Leave Type', className: 'leaveTypeCol' },
      { key: 'leaveFrom', label: 'Leave From', className: 'leaveFromCol' },
      { key: 'leaveTo', label: 'Leave To', className: 'leaveToCol' },
      { key: 'Relation', label: 'Relation', className: 'relationCol' },
      { key: 'noOfDays', label: 'No of Days', className: 'noOfDaysCol' }
    ],
    defaultData: [
      {
        id: 1,
        leaveType: 'Bereavement Leave',
        leaveFrom: '02-May-2025',
        leaveTo: '07-May-2025',
        Relation: 'Father',
        noOfDays: 4
      }
    ]
  },

  // Route 11 - Uses same as route 8 (Training)
  route11: {
    columns: [
      { key: 'leaveType', label: 'Leave Type', className: 'leaveTypeCol' },
      { key: 'leaveFrom', label: 'Leave From', className: 'leaveFromCol' },
      { key: 'leaveTo', label: 'Leave To', className: 'leaveToCol' },
      { key: 'SubCategories', label: 'Sub Categories', className: 'subCategoriesCol' },
      { key: 'Duration', label: 'Duration', className: 'durationCol' },
      { key: 'ProgramName', label: 'Program Name', className: 'programNameCol' },
      { key: 'Institute', label: 'Institute', className: 'instituteCol' },
      { key: 'CourseCommencement', label: 'Course Commencement', className: 'courseCommencementCol' }
    ],
    defaultData: [
      {
        id: 1,
        leaveType: 'Training Leave',
        leaveFrom: '02-May-2025',
        leaveTo: '07-May-2025',
        SubCategories: 'Technical Training',
        Duration: '5 days',
        ProgramName: 'Advanced React Development',
        Institute: 'Tech Institute',
        CourseCommencement: '02-May-2025'
      }
    ]
  },

  // Route 12 - Uses same as route 9 but with Date of Birth instead of Expected Delivery Date
  route12: {
    columns: [
      { key: 'leaveType', label: 'Leave Type', className: 'leaveTypeCol' },
      { key: 'leaveFrom', label: 'Leave From', className: 'leaveFromCol' },
      { key: 'leaveTo', label: 'Leave To', className: 'leaveToCol' },
      { key: 'DateOfBirth', label: 'Date of Birth', className: 'dateOfBirthCol' },
      { key: 'noOfDays', label: 'No of Days', className: 'noOfDaysCol' }
    ],
    defaultData: [
      {
        id: 1,
        leaveType: 'Compassionate Leave',
        leaveFrom: '02-May-2025',
        leaveTo: '07-May-2025',
        DateOfBirth: '07-May-2025',
        noOfDays: 4
      }
    ]
  }
};

// Function to get table config by route
export const getTableConfig = (route) => {
  return TABLE_CONFIGS[`route${route}`] || TABLE_CONFIGS.route1;
};