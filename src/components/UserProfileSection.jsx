import React from "react";
import "../styles/Avatars.css";
import ApplicationHeader from './ApplicationHeader';
import EmployeeProfile from './EmployeeProfile';
import LeaveApplicationForm from './LeaveApplicationForm';


const UserProfileSection = () => {
	

	const employeeData = {
		initials: "MK",
		name: "Manoj Kandan M",
		genId: "255048878",
		email: "Manoj.kandan@partner.samsung.com",
		designation: "Outsourcing",
		division: "Tech Strategy Team\\Smart Infra Group\\Information System & AI Tools",
		manager: "Ravindra S R (06786669)",
		isOnline: true,
	};

	return (
		<div className="avatars-container">
			<ApplicationHeader
				breadcrumb="My Workspace > Leave Summary"
				title="Leave Summary -Report"
				onBackClick={handleBackClick}
				onClockClick={handleClockClick}
			/>

			<EmployeeProfile
				employee={employeeData}
				onAvatarClick={handleAvatarClick}
				onNameClick={handleNameClick}
				onEmailClick={handleEmailClick}
				onDesignationClick={handleDesignationClick}
				onDivisionClick={handleDivisionClick}
				onLocationClick={handleLocationClick}
				onManagerClick={handleManagerClick}
			/>

			<LeaveApplicationForm onClick={handleRequiredInfoClick} />

			
		</div>
	);
};

export default UserProfileSection;