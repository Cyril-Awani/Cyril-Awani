import React from 'react';

const UserLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div>
			<div>{children}</div>
		</div>
	);
};

export default UserLayout;
