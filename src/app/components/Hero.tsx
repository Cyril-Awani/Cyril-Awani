'use client';

import Image from 'next/image';
import Button from './Button';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';

// Array of image URLs to display in the hero section
const images = [
	'/images/pic.jpg',
	'/images/pica.jpg',
	'/images/bdm.jpg',
	'/images/hrr.jpg',
];

const Hero = () => {
	// State to keep track of the currently displayed image index
	const [currentIndex, setCurrentIndex] = useState(0);
	// Animation controls for Framer Motion
	const controls = useAnimation();

	// Effect to change the image every 5 seconds
	useEffect(() => {
		const interval = setInterval(() => {
			// Update the current index, looping back to the start when reaching the end
			setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
		}, 5000); // Change image every 5 seconds

		// Cleanup the interval on component unmount
		return () => clearInterval(interval);
	}, []);

	return (
		<div className='max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center py-8 px-4 h-full'>
			<div className='lg:w-1/2 p-4 space-y-4 text-center lg:text-left'>
				<h1 className='text-gray-900 dark:text-white font-bold text-3xl sm:text-4xl md:text-5xl'>
					Find Your Dream <span className='text-emerald-600'>Home</span>
				</h1>
				<p className='text-gray-700 dark:text-gray-300 text-lg'>
					Explore the best properties available for you and your family.
					Discover homes that match your lifestyle!
				</p>
				<Button
					type='button'
					title='View Properties'
					icon={
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className='size-6 cursor-pointer'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z'
							/>
						</svg>
					}
					className=''
				/>
			</div>

			<div className='hidden md:flex lg:w-1/2 relative mt-6 lg:mt-0'>
				<motion.div
					animate={controls}
					className='rounded-md shadow-lg overflow-hidden h-full'>
					<Image
						src={images[currentIndex]} // Display the current image based on index
						alt='Beautiful home'
						width={640} // Set a fixed width for all images
						height={360} // Set height to maintain aspect ratio
						className='rounded-md object-cover w-full h-full' // Fill the container
					/>
				</motion.div>
			</div>
		</div>
	);
};

export default Hero;
