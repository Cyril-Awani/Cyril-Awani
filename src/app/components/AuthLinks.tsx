'use client'; // Mark this component as a Client Component

import React, { useState } from 'react';
import Image from 'next/image';
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react';
import NotificationsActiveRoundedIcon from '@mui/icons-material/NotificationsActiveRounded';
import pic from '../../../public/images/pic.jpg';
import Button from './Button';

const userNavigation = [
	{ name: 'My Profile', href: '#' },
	{ name: 'Notifications', href: '#' },
	{ name: 'Dashboard', href: '#' },
	{ name: 'Saves', href: '#' },
	{ name: 'Support', href: '#' },
	{ name: 'Sign out', href: '#' },
];

const guestNavigation = [
	{ name: 'Login', href: '#' },
	{ name: 'Sign Up', href: '#' },
];

const user = {
	name: 'Tom Cook',
	email: 'tom@example.com',
	image: pic,
};

const AuthLinks = () => {
	const [isAuthenticated, setIsAuthenticated] = useState(true);
	const [notifications, setNotifications] = useState(3);

	const navigation = isAuthenticated ? userNavigation : guestNavigation;

	return (
		<div>
			<Menu as='div' className='relative'>
				<div className='flex items-center'>
					{isAuthenticated && (
						<button
							type='button'
							className='hidden lg:flex relative rounded-full p-1 text-txt hover:text-txt hover:scale-105 border-txt focus:outline-none focus:ring-1 focus:ring-white focus:ring-offset-2 mr-2'>
							<span className='sr-only'>View notifications</span>
							<NotificationsActiveRoundedIcon
								aria-hidden='true'
								className='h-8 w-8'
							/>
							{notifications > 0 && (
								<span className='absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-white shadow-md text-black text-xs font-bold'>
									{notifications}
								</span>
							)}
						</button>
					)}
					<MenuButton className='flex shrink-0 rounded-full shadow text-sm transition duration-300 ease-in-out hover:shadow-xl hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'>
						<span className='sr-only'>Open user menu</span>
						{isAuthenticated ? (
							<div className='relative'>
								<Image
									className='w-8 h-8 rounded-full'
									src={user.image}
									alt='Profile picture'
									width={50}
									height={50}
								/>
								{notifications > 0 && (
									<span className='lg:hidden absolute -top-1 -right-1 flex h-4 w-4 p-1 items-center justify-center rounded-full bg-white shadow-sm text-black text-xs font-bold'>
										{notifications}
									</span>
								)}
							</div>
						) : (
							<Button
								type='button'
								title=''
								icon={
									<svg
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
										strokeWidth='1.5'
										stroke='currentColor'
										className='w-6 h-6'>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											d='M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z'
										/>
									</svg>
								}
								variant='red'
								className='bg-white transition duration-300 ease-in-out hover:shadow-md hover:scale-102'
							/>
						)}
					</MenuButton>
				</div>
				<MenuItems className='absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-bck shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none'>
					{navigation.map((item, index) => (
						<React.Fragment key={item.name}>
							<MenuItem>
								<a
									href={item.href}
									className='block px-4 py-2 text-sm text-txt font-normal hover:font-semibold'>
									{item.name}
								</a>
							</MenuItem>
							{index === 3 && <div className='my-1 h-px bg-gray-200 shadow' />}
						</React.Fragment>
					))}
				</MenuItems>
			</Menu>
		</div>
	);
};

export default AuthLinks;
