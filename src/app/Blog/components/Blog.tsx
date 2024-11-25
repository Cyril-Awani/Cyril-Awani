'use client';

import React from 'react';
import Image from 'next/image';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import pic from '../../../../public/images/pic.jpg';

interface BlogProps {
	category: string;
	readTime: string;
	heroTitle: string;
	heroExcerpt: string;
}

const Blog: React.FC<BlogProps> = ({
	category = 'Home Improvement', // Default category
	readTime = '5 Min Read', // Default read time
	heroTitle = "Musk faces regulators' questions over X takeover - but will he show up?", // Default title
	heroExcerpt = "Musk abruptly cancelled a deposition with government lawyers and now they fear he'll ghost them again.", // Default excerpt
}) => {
	return (
		<div className='mx-auto p-4 rounded-lg max-w-7xl'>
			{/* Featured */}
			<div className='flex flex-col md:flex-row gap-6 mt-6'>
				{/* Hero Section */}
				<div className='relative w-full md:w-5/7 h-96'>
					<Image
						src={pic}
						alt='Hero Image'
						layout='fill'
						objectFit='cover'
						className='rounded-lg'
					/>
					<div className='absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-60 rounded-lg flex flex-col justify-end p-4 transition-all duration-300 ease-in-out'>
						<p className='text-white text-xs mb-2 flex items-center'>
							<AccessTimeIcon
								sx={{
									fontSize: 14,
									color: 'white',
									marginRight: '3px',
								}}
							/>
							{category} <span className='mx-2'>|</span> {readTime}
						</p>
						<h2 className='text-3xl font-bold text-white'>{heroTitle}</h2>
						<p className='text-white mt-2'>{heroExcerpt}</p>
					</div>
				</div>

				{/* Latest News Section (Sidebar) */}
				<div className='md:w-2/7 flex flex-col'>
					<h3 className='text-lg font-semibold mb-4'>Latest News</h3>
					<div className='space-y-6'>
						{Array(4)
							.fill(0)
							.map((_, index) => (
								<div key={index} className='flex flex-col'>
									<p className='text-xs text-gray-500 flex items-center mb-1'>
										<AccessTimeIcon
											sx={{
												fontSize: 14,
												color: 'gray',
												marginRight: '3px',
											}}
										/>
										{category} <span className='mx-2'>|</span> {readTime}
									</p>
									<h4 className='font-medium text-md'>{heroTitle}</h4>
								</div>
							))}
						{/* Add more latest news here */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Blog;
