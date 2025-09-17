import React from 'react';
import Header from './Header';
import Avatar from './Avatar';
import RequiredInfo3 from './RequiredInfo3';
import '../styles/Avatars.css';

const Avatars3 = () => {
  return (
    <div className="avatars">
      <div className="avatars-1 required-info-row">
        <div className="avatar-column required-info-column">
          <div className="header-wrapper">
            <Header />
          </div>
          <Avatar />
        </div>
        <RequiredInfo3 className="required-info-column" />
      </div>
    </div>
  );
};

export default Avatars3;
