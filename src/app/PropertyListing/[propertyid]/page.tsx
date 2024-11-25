'use client';
import React from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import IosShareIcon from '@mui/icons-material/IosShare';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import FlagIcon from '@mui/icons-material/Flag';
import PropertyInquiry from '../components/proprtyinquiryform';
import CarouselWithCategoryGrid from '@/app/components/CarouselWithCategoryGrid';
import Overview from '@/app/components/Overview';
import PropertyTab from '@/app/components/PropertyTab';

const PropertyDetails = ({ params }) => {
	return (
		<div className='container mx-auto px-4'>
			<h1 className='text-xl font-extrabold'>
				Property Detail: {params.propertyid}
			</h1>
			<header className='flex items-center justify-between w-full py-4'>
				<div className='flex items-center space-x-4'>
					<button
						aria-label='Go back'
						className='flex items-center text-hvr hover:text-btn transition group'>
						<ArrowForwardIosIcon className='transform rotate-180' />
						<span className='hidden md:block ml-2 group-hover:underline'>
							Back
						</span>
					</button>
				</div>
				<div className='flex-grow flex justify-center'>
					<img
						src='/path/to/logo.png'
						alt='Company Logo'
						className='h-auto max-w-lg'
					/>
				</div>
				<div className='flex items-center space-x-4'>
					<button
						aria-label='Share property'
						className='flex items-center text-btn hover:text-hvrbg transition group'>
						<IosShareIcon />
						<span className='hidden md:block ml-2 group-hover:underline'>
							Share
						</span>
					</button>
					<button
						aria-label='Save property'
						className='flex items-center text-btn hover:text-hvrbg transition group'>
						<SaveAltIcon />
						<span className='hidden md:block ml-2 group-hover:underline'>
							Save
						</span>
					</button>
					<button
						aria-label='Report property'
						className='flex items-center text-btn hover:text-hvrbg transition group'>
						<FlagIcon />
						<span className='hidden md:block ml-2 group-hover:underline'>
							Report
						</span>
					</button>
				</div>
			</header>

			<main className='py-4'>
				<section className='flex justify-between items-center m-2 '>
					<div>
						<h1 className='text-xl sm:text-3xl  font-bold'>Property Title</h1>
						<p className='text-gray-600 capitalize'>
							Location: No, street,lga, State.
						</p>
					</div>
					<div>
						<h1 className='text-xl sm:text-3xl font-bold mr-8 sm:ml:auto'>
							3,500,000
						</h1>
					</div>
				</section>

				<CarouselWithCategoryGrid />

				<section className='flex flex-col lg:flex-row max-w-screen-xl mx-auto justify-between rounded-md border border-gray-100 text-gray-700 shadow-md mb-4'>
					<div className='w-full lg:w-2/3'>
						<Overview />
						<PropertyTab />
					</div>
					<div className='w-full lg:w-1/3 p-4'>
						<PropertyInquiry />
					</div>
				</section>
			</main>
			<div>
				<p className='font-bold text-lg leading-1 text-gray-900 leading-10 pb-1 border-b border-gray-200 cursor-pointer'></p>
			</div>
		</div>
	);
};

export default PropertyDetails;
