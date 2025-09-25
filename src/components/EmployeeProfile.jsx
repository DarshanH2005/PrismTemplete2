import React from 'react';
import '../styles/EmployeeProfile.css';
import EmployeeAvatar from './EmployeeAvatar';
import EmployeeInformation from './EmployeeInformation';
import ProfileCard from './ProfileCard';

const EmployeeProfile = ({
  employee,
  onAvatarClick = null,
  onNameClick = null,
  onEmailClick = null,
  onDesignationClick = null,
  onDivisionClick = null,
  onManagerClick = null,
  className = '',
}) => {
  const {
    initials = 'MK',
    name = 'Manoj Kandan M',
    genId = '255048778',
    email = 'Manoj.kandan@partner.samsung.com',
    designation = 'Outsourcing',
    division = 'Tech Strategy Team\\Smart Infra Group\\Information System & AI Tools',
    manager = 'Ravindra S R (06786669)',
    isOnline = true,
  } = employee || {};

  return (
    <div className={`employee-profile-section ${className}`}>
      <EmployeeAvatar initials={initials} isOnline={isOnline} onClick={onAvatarClick} />

      <EmployeeInformation
        name={name}
        genId={genId}
        email={email}
        onNameClick={onNameClick}
        onEmailClick={onEmailClick}
      />

      <ProfileCard
        designation={designation}
        division={division}
        manager={manager}
        onDesignationClick={onDesignationClick}
        onDivisionClick={onDivisionClick}
        onManagerClick={onManagerClick}
      />
    </div>
  );
};

export default EmployeeProfile;
