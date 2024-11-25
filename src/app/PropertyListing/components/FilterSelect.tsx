// FilterSelect.tsx
'use client';

import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

interface FilterSelectProps {
	selectedProperty: string;
	setSelectedProperty: (value: string) => void;
	selectedBeds: string;
	setSelectedBeds: (value: string) => void;
	selectedBaths: string;
	setSelectedBaths: (value: string) => void;
}

const FilterSelect: React.FC<FilterSelectProps> = ({
	selectedProperty,
	setSelectedProperty,
	selectedBeds,
	setSelectedBeds,
	selectedBaths,
	setSelectedBaths,
}) => {
	const TypesList = [
		'Flat',
		'Duplex',
		'Bedsitter/Studio',
		'Commercial',
		'Land',
	];
	const bedOptions = ['1 Bed', '2+ Beds', '3+ Beds', '4+ Beds'];
	const bathOptions = ['1 Bath', '2+ Baths', '3+ Baths', '4+ Baths'];

	return (
		<div className='flex flex-row sm:flex-row sm:space-x-4 items-center justify-center xs:m-1'>
			<FormControl
				className='min-w-[120px] flex-1 sm:max-w-[100px] mb-2 sm:mb-0'
				size='small'>
				<InputLabel id='property-type-select-label' sx={{ fontSize: '0.7rem' }}>
					Type
				</InputLabel>
				<Select
					labelId='property-type-select-label'
					id='property-type-select'
					value={selectedProperty}
					label='Property Type'
					sx={{ fontSize: '0.7rem' }}
					onChange={(event) => setSelectedProperty(event.target.value)}>
					<MenuItem value=''>
						<em>Any</em>
					</MenuItem>
					{TypesList.map((type) => (
						<MenuItem key={type} value={type} sx={{ fontSize: '0.7rem' }}>
							{type}
						</MenuItem>
					))}
				</Select>
			</FormControl>

			<FormControl
				className='min-w-[80px] flex-1 sm:max-w-[80px] mb-2 sm:mb-0'
				size='small'>
				<InputLabel id='bed-select-label' sx={{ fontSize: '0.75rem' }}>
					Beds
				</InputLabel>
				<Select
					labelId='bed-select-label'
					id='bed-select'
					value={selectedBeds}
					label='Beds'
					sx={{ fontSize: '0.7rem' }}
					onChange={(event) => setSelectedBeds(event.target.value)}>
					<MenuItem value=''>
						<em>Any</em>
					</MenuItem>
					{bedOptions.map((bed) => (
						<MenuItem key={bed} value={bed} sx={{ fontSize: '0.75rem' }}>
							{bed}
						</MenuItem>
					))}
				</Select>
			</FormControl>

			<FormControl
				className='min-w-[80px] flex-1 sm:max-w-[80px] mb-2 sm:mb-0'
				size='small'>
				<InputLabel id='bath-select-label' sx={{ fontSize: '0.7rem' }}>
					Baths
				</InputLabel>
				<Select
					labelId='bath-select-label'
					id='bath-select'
					value={selectedBaths}
					label='Baths'
					sx={{ fontSize: '0.7rem' }}
					onChange={(event) => setSelectedBaths(event.target.value)}>
					<MenuItem value=''>
						<em>Any</em>
					</MenuItem>
					{bathOptions.map((bath) => (
						<MenuItem key={bath} value={bath} sx={{ fontSize: '0.7rem' }}>
							{bath}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</div>
	);
};

export default FilterSelect;
