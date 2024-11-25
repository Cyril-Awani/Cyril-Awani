import React from 'react';
import { FaFilter, FaSearch, FaImage } from 'react-icons/fa';

const SearchBar = () => {
	return (
		<div className='flex items-center justify-between w-full p-2 bg-white rounded-full shadow-md'>
			{/* Filter Button */}
			<button className='flex items-center px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-100'>
				<FaFilter className='mr-2' />
				<span>Filter</span>
			</button>

			{/* Search Input */}
			<div className='flex items-center w-full max-w-2xl mx-4 bg-gray-100 rounded-full'>
				<FaSearch className='ml-4 text-gray-500' />
				<input
					type='text'
					placeholder='Search the creative world at work'
					className='w-full px-4 py-2 bg-transparent focus:outline-none'
				/>
			</div>

			{/* Search by Image Button */}
			<button className='flex items-center px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-100'>
				<FaImage className='mr-2' />
				<span>Search by Image</span>
			</button>

			{/* Sort Dropdown */}
			<div className='relative'>
				<button className='flex items-center px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-100'>
					<span className='mr-2'>Recommended</span>
					<svg
						className='w-4 h-4'
						fill='none'
						stroke='currentColor'
						viewBox='0 0 24 24'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							d='M19 9l-7 7-7-7'></path>
					</svg>
				</button>
			</div>
		</div>
	);
};

export default SearchBar;
