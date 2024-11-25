'use client';

import { useState, useEffect } from 'react';
import propertyData from '@/app/Data/propertyData';
import CarouselSection from '@/app/components/CarouselSection'; // Make sure to correct this path

const Featured = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const limitedCardData = propertyData.slice(0, 8);
	const rentCardData = propertyData.slice(9, 14);
	const saleCardData = propertyData.slice(15, 20);

	const prevSlide = () => {
		if (currentIndex > 0) {
			setCurrentIndex((prev) => prev - 1);
		}
	};

	const nextSlide = () => {
		if (currentIndex < limitedCardData.length - 1) {
			setCurrentIndex((prev) => prev + 1);
		}
	};

	const handleKeyDown = (event) => {
		if (event.key === 'ArrowLeft') {
			prevSlide();
		} else if (event.key === 'ArrowRight') {
			nextSlide();
		}
	};

	// Add event listener for keyboard events
	useEffect(() => {
		window.addEventListener('keydown', handleKeyDown);

		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, []); // No dependency on currentIndex

	return (
		<div className='bg-gray-50 dark:bg-gray-800 max-w-7xl mx-auto'>
			<div className='bg-gray-50 dark:bg-gray-800'>
				<CarouselSection
					title='Recently Added'
					cardData={limitedCardData}
					prevSlide={prevSlide}
					nextSlide={nextSlide}
					currentIndex={currentIndex}
				/>
				<CarouselSection
					title='For Rent'
					cardData={rentCardData}
					prevSlide={prevSlide}
					nextSlide={nextSlide}
					currentIndex={currentIndex}
				/>
				<CarouselSection
					title='For Sale'
					cardData={saleCardData}
					prevSlide={prevSlide}
					nextSlide={nextSlide}
					currentIndex={currentIndex}
				/>
			</div>

			<div className='pt-12 p-4'>
				<div className='grid gap-4 md:grid-cols-3 md:gap-5'>
					{/* Buy Property Card */}
					<div className='rounded-xl bg-white p-6 text-center shadow-xl'>
						<div className='mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-teal-400 shadow-lg shadow-teal-500/40'>
							<svg
								viewBox='0 0 33 46'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
								className='h-6 w-6 text-white'>
								<path d='M24.75 23H8.25V28.75H24.75V23Z' fill='white'></path>
							</svg>
						</div>
						<h1 className='text-darken mb-3 text-xl font-medium lg:px-14'>
							Buy Property
						</h1>
						<p className='text-darker text-slate-700 dark:text-gray-300'>
							Interested in buying property? Find the most suitable options for
							you!
						</p>
					</div>

					{/* Sell Property Card */}
					<div className='rounded-xl bg-white p-6 text-center shadow-xl'>
						<div className='mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-teal-400 shadow-lg shadow-teal-500/40'>
							<svg
								viewBox='0 0 33 46'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
								className='h-6 w-6 text-white'>
								<path d='M24.75 23H8.25V28.75H24.75V23Z' fill='white'></path>
							</svg>
						</div>
						<h1 className='text-darken mb-3 text-xl font-medium lg:px-14'>
							Sell Property
						</h1>
						<p className='text-darker text-slate-700 dark:text-gray-300'>
							List your property on our platform to reach thousands of potential
							buyers!
						</p>
					</div>

					{/* Rent Property Card */}
					<div className='rounded-xl bg-white p-6 text-center shadow-xl'>
						<div className='mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-teal-400 shadow-lg shadow-teal-500/40'>
							<svg
								viewBox='0 0 33 46'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
								className='h-6 w-6 text-white'>
								<path d='M24.75 23H8.25V28.75H24.75V23Z' fill='white'></path>
							</svg>
						</div>
						<h1 className='text-darken mb-3 text-xl font-medium lg:px-14'>
							Rent Property
						</h1>
						<p className='text-darker text-slate-700 dark:text-gray-300'>
							Looking for a rental? Explore our rental listings and find your
							next home!
						</p>
					</div>
				</div>
			</div>

			<section className='bg-gray-50 dark:bg-gray-800 mt-20'>
				<div className='max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6'>
					<div className='max-w-screen-sm mx-auto text-center'>
						<h2 className='mb-4 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white'>
							Start your free trial today
						</h2>
						<p className='mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg'>
							Try Landwind Platform for 30 days. No credit card required.
						</p>
						<a
							href='#'
							className='text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800'>
							Free trial for 30 days
						</a>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Featured;
