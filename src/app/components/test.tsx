'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import AuthLinks from '@/app/components/AuthLinks';
import SegmentRoundedIcon from '@mui/icons-material/SegmentRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import CottageIcon from '@mui/icons-material/Cottage';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import TourIcon from '@mui/icons-material/Tour';
import CalculateIcon from '@mui/icons-material/Calculate';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import SearchComponent from './SearchComponent';

interface ChildItem {
	label: string;
	link: string;
	iconImage?: string;
}

interface NavItem {
	label: string;
	link: string;
	children?: ChildItem[];
	current?: boolean;
}

const navItems: NavItem[] = [
	{
		label: 'Buy',
		link: '#',
		children: [
			{ label: 'Houses', link: '#', iconImage: 'buy' },
			{ label: 'Land', link: '#', iconImage: 'myrental' },
			{ label: 'Commercial', link: '#', iconImage: 'calculator' },
			{ label: 'Guide', link: '#', iconImage: 'guide' },
		],
	},
	{
		label: 'Rent',
		link: '#',
		children: [
			{ label: 'Apartments', link: '#', iconImage: 'rent' },
			{ label: 'Land/Lots', link: '#', iconImage: 'myrental' },
			{ label: 'Stores/Warehouses', link: '#', iconImage: 'calculator' },
			{ label: 'Renters Guide', link: '#', iconImage: 'guide' },
		],
	},
	{ label: "Cawani's Blog", link: '/Blog' },
	{ label: 'Career', link: '#' },
	{ label: 'Advertise', link: 'Advertise' },
];

const iconMap: Record<string, React.ReactNode> = {
	rent: <CottageIcon />,
	myrental: <MapsHomeWorkIcon />,
	calculator: <CalculateIcon />,
	guide: <TourIcon />,
	buy: <LocationCityIcon />,
};

const getIcon = (iconName?: string) => {
	return iconName ? iconMap[iconName] : null;
};

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(' ');
}

export default function NavBar() {
	const [menuOpen, setMenuOpen] = useState(false);
	const menuRef = useRef<HTMLDivElement>(null); // Ref for detecting click outside

	// Close the menu when clicking outside
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
				setMenuOpen(false); // Close the menu when clicking outside
			}
		};

		document.addEventListener('click', handleClickOutside);

		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	}, []);

	const handleItemClick = () => {
		setMenuOpen(false); // Close menu on item click
	};

	return (
		<nav className='bg-bck border-b border-gray-300 space-x-4'>
			<div className='mx-auto max-w-7xl px-2 sm:px-5 lg:px-8'>
				<div className='relative flex h-16 items-center justify-between'>
					{/* Mobile Menu Button */}
					<div className='relative inset-y-0 left-0 flex items-center md:hidden'>
						<button
							onClick={() => setMenuOpen(!menuOpen)} // Toggle menu on button click
							className='group relative inline-flex items-center justify-center rounded-md bg-txt p-2 mr-2 text-white hover:bg-txt hover:text-white focus:outline-none focus:ring-1 focus:ring-inset'
							aria-haspopup='true'
							aria-expanded={menuOpen ? 'true' : 'false'}>
							<span className='sr-only'>Open main menu</span>
							{menuOpen ? (
								<CloseRoundedIcon className='block h-5 w-5' />
							) : (
								<SegmentRoundedIcon className='block h-5 w-5' />
							)}
						</button>
					</div>

					{/* Logo and Links */}
					<div className='hidden md:flex flex-shrink-0 items-center'>
						<div className='flex-shrink-0 mr-5'>
							<Image
								src='https://www.reshot.com/preview-assets/icons/NVQ647DYCA/lastfm-NVQ647DYCA.svg'
								alt='Your Company Logo'
								width={50}
								height={50}
								className='h-8 w-auto'
								priority
							/>
						</div>
						<div className='hidden sm:block'>
							<div className='flex gap-2'>
								{navItems.map((item) => (
									<div key={item.label} className='relative group'>
										<a
											href={item.link}
											className={classNames(
												item.current
													? 'bg-txt text-white'
													: 'text-txt hover:border-b-2 border-btn hover:text-btn',
												'px-3 py-2 text-sm font-medium',
											)}>
											{item.label}
										</a>
										{item.children && (
											<div className='absolute left-0 z-20 hidden min-w-52 bg-white shadow-lg group-hover:block delay-150'>
												{item.children.map((child) => (
													<a
														key={child.label}
														href={child.link}
														className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200'>
														{child.iconImage && getIcon(child.iconImage)}
														{child.label}
													</a>
												))}
											</div>
										)}
									</div>
								))}
							</div>
						</div>
					</div>

					<SearchComponent />
					<AuthLinks />
				</div>
			</div>

			{/* Mobile Menu */}
			{menuOpen && (
				<div
					ref={menuRef} // Attach ref to the mobile menu
					className='md:hidden absolute top-0 left-0 w-full bg-white shadow-lg z-50'>
					<div className='pt-2 pb-2 space-y-1 w-full h-[100vh]'>
						{/* Close Button */}
						<div className='flex justify-end p-4'>
							<button
								onClick={() => setMenuOpen(false)} // Close the menu when clicked
								className='text-gray-600 hover:text-black'>
								<CloseRoundedIcon className='block h-6 w-6' />
							</button>
						</div>

						<div className='flex justify-start px-4 py-2 items-center'>
							<Image
								src='https://www.reshot.com/preview-assets/icons/NVQ647DYCA/lastfm-NVQ647DYCA.svg'
								alt='Cawani Logo'
								width={50}
								height={50}
								className='h-8 w-auto'
								priority
							/>
						</div>

						<div className='space-y-1'>
							{navItems.map((item) => (
								<div key={item.label} className='relative group'>
									<a
										href={item.link}
										className='text-txt hover:font-extrabold block rounded-md px-3 py-2 text-base font-medium'
										onClick={handleItemClick} // Close menu on item click
									>
										{item.label}
									</a>
									{item.children && (
										<div className='ml-4'>
											{item.children.map((child) => (
												<a
													key={child.label}
													href={child.link}
													className='block py-1 text-sm text-gray-600 hover:text-black hover:font-bold'
													onClick={handleItemClick} // Close menu on item click
												>
													<span className='mr-4'>
														{child.iconImage &&
															React.cloneElement(getIcon(child.iconImage), {
																sx: { color: 'txt' },
															})}
													</span>
													{child.label}
												</a>
											))}
										</div>
									)}
								</div>
							))}
						</div>
					</div>
				</div>
			)}
		</nav>
	);
}
