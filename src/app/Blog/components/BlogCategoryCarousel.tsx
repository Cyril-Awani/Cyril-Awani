// BlogCategoryCarousel.tsx

'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const blogCategory = [
	'Cawani News',
	'Home Improvement',
	'Fun and Lifestyle',
	'Landlord and Tenants Guide',
	'Designs',
	'Real Estate Investment',
	'Property Management',
	'Market Trends',
	'Architecture and Interiors',
	'Neighborhood Spotlights',
	'Green Living',
	'Renovation Tips',
	'DIY Projects',
	'Legal Advice',
	'First-Time Home Buyers',
	'Luxury Living',
	'Smart Home Technology',
	'Vacation Rentals',
	'Commercial Real Estate',
	'Home Staging',
	'Property Financing',
	'Moving Tips and Tricks',
	'Sustainable Architecture',
	'Real Estate Tax Planning',
	'Retirement Living',
];

const BlogCategoryCarousel = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [itemWidth, setItemWidth] = useState(0);
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (containerRef.current) {
			const firstItem = containerRef.current.querySelector('div');
			if (firstItem) {
				setItemWidth(firstItem.clientWidth + 16);
			}
		}
	}, []);

	const next = () => {
		setCurrentIndex((prevIndex) =>
			Math.min(prevIndex + 1, blogCategory.length - 1),
		);
	};

	const prev = () => {
		setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
	};

	return (
		<div className='relative overflow-hidden h-14 flex items-center'>
			<motion.div
				ref={containerRef}
				className='flex space-x-4 mx-10'
				initial={{ x: -currentIndex * itemWidth }}
				animate={{ x: -currentIndex * itemWidth }}
				transition={{ duration: 0.5, ease: 'easeInOut' }}>
				{blogCategory.map((category, index) => (
					<motion.div
						key={index}
						className='flex-shrink-0 snap-start p-2 bg-gray-100 hover:text-black hover:font-semibold rounded-full flex items-center justify-center text-xs font-light cursor-pointer'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: index * 0.1 }}>
						{category}
					</motion.div>
				))}
			</motion.div>

			{/* Navigation Buttons */}
			<div className='absolute inset-y-0 left-0 flex items-center'>
				<button
					className='bg-gray-100 hover:bg-gray-400 hover:text-white shadow-md text-black p-1 rounded-full flex items-center justify-center focus:outline-none transition'
					onClick={prev}>
					<KeyboardArrowLeftIcon className='h-4 w-4' />
				</button>
			</div>
			<div className='absolute inset-y-0 right-0 flex items-center'>
				<button
					className='bg-gray-100 hover:bg-gray-400 hover:text-white shadow-md text-black p-1 rounded-full flex items-center justify-center focus:outline-none transition'
					onClick={next}>
					<KeyboardArrowRightIcon className='h-4 w-4' />
				</button>
			</div>
		</div>
	);
};

export default BlogCategoryCarousel;
