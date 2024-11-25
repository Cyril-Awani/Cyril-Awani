import React from 'react';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaSquareFacebook } from 'react-icons/fa6';
import { IoLogoLinkedin } from 'react-icons/io5';

// Social media icons with their respective names and links
const socialIcons = [
	{ name: 'twitter', icon: <FaSquareXTwitter />, url: 'javascript:;' },
	{ name: 'instagram', icon: <FaInstagramSquare />, url: 'javascript:;' },
	{ name: 'linkedin', icon: <FaSquareFacebook />, url: 'javascript:;' },
	{ name: 'youtube', icon: <IoLogoLinkedin />, url: 'javascript:;' },
];

// Footer columns data
const footerColumns = [
	{
		title: 'Cawani',
		links: ['Home', 'About', 'Pricing', 'Features'],
	},
	{
		title: 'Products',
		links: [
			'Figma UI System',
			'Icons Assets',
			'Responsive Blocks',
			'Components Library',
		],
	},
	{
		title: 'Resources',
		links: ['FAQs', 'Quick Start', 'Documentation', 'User Guide'],
	},
	{
		title: 'Blogs',
		links: ['News', 'Tips & Tricks', 'New Updates', 'Events'],
	},
];

const Footer = () => {
	return (
		<footer className='w-full'>
			<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
				{/* Grid */}
				<div className='grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-8 py-10 max-sm:max-w-sm max-sm:mx-auto gap-y-8'>
					<div className='col-span-full mb-10 lg:col-span-2 lg:mb-0'>
						<p className='py-8 text-sm text-gray-500 lg:max-w-xs text-center lg:text-left'>
							Trusted in more than 100 countries & 5 million customers. Have any
							query?
						</p>
						<a
							href='javascript:;'
							className='py-2.5 px-5 h-9 block w-fit bg-btn rounded-full shadow-sm text-xs text-white mx-auto transition-all duration-500 hover:bg-indigo-700 lg:mx-0'>
							Contact us
						</a>
					</div>
					{/* End Col */}

					{/* Map through footer columns */}
					{footerColumns.map((column, index) => (
						<div key={index} className='lg:mx-auto text-left'>
							<h4 className='text-lg text-gray-900 font-medium mb-7'>
								{column.title}
							</h4>
							<ul className='text-sm transition-all duration-500'>
								{column.links.map((link, linkIndex) => (
									<li key={linkIndex} className='mb-6'>
										<a
											href='javascript:;'
											className='text-gray-600 hover:text-btn hover:font-bold'>
											{link}
										</a>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
				{/* End Grid */}

				<div className='py-7 border-t border-gray-200'>
					<div className='flex items-center justify-center flex-col lg:justify-between lg:flex-row'>
						<span className='text-sm text-gray-500'>
							©{' '}
							<a href='https://Awani.com/' className='hover:underline'>
								Awani
							</a>{' '}
							2024, All rights reserved.
						</span>
						<div className='flex mt-4 space-x-4 sm:justify-center lg:mt-0'>
							{/* Map through social icons */}
							{socialIcons.map((social, index) => (
								<a
									key={index}
									href={social.url}
									className='w-9 h-9 rounded-full border border-indigo-600 p-1 text-indigo-600 shadow flex justify-center items-center hover:bg-indigo-600 hover:text-white'>
									{social.icon}
								</a>
							))}
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
