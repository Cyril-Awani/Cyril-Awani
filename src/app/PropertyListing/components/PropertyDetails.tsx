// components/PropertyCard.tsx
import React from 'react';
import BedIcon from '@mui/icons-material/Bed';
import ShowerIcon from '@mui/icons-material/Shower';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Tooltip from '@mui/material/Tooltip';
import { motion } from 'framer-motion';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

interface MonthlyPayments {
	security: string;
	garbage: string;
	water: string;
	electricity: string;
	internet: string;
}

interface Policies {
	pets: string;
	smoking: string;
	leaseTerm: string;
	guests: string;
}

interface PropertyImages {
	kitchen: string[];
	bathroom: string[];
	bedroom: string[];
	livingRoom: string[];
	exterior: string[];
}

interface Property {
	id: number;
	name: string;
	address: string;
	type: string;
	images: PropertyImages;
	price: number;
	viewsCount: number;
	manager: string;
	beds: number;
	baths: number;
	fact: string;
	features: string[];
	amenities: string[];
	monthlyPayments: MonthlyPayments;
	policies: Policies;
}

const PropertyDetails: React.FC<{ property: Property }> = ({ property }) => {
	return (
		<div className='max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md'>
			<h2 className='text-2xl font-bold'>{property.name}</h2>
			<p className='text-gray-500'>{property.address}</p>
			<p className='text-xl font-semibold mt-2'>
				${property.price.toLocaleString()}
			</p>
			<p className='mt-2'>Managed by: {property.manager}</p>
			<div className='grid grid-cols-2 gap-4 mt-4'>
				{property.images.kitchen.map((img, index) => (
					<img
						key={index}
						src={img}
						alt={`Kitchen ${index + 1}`}
						className='rounded'
					/>
				))}
			</div>
			<h3 className='mt-4 text-lg font-semibold'>Features</h3>
			<ul className='list-disc pl-5'>
				{property.features.map((feature, index) => (
					<li key={index}>{feature}</li>
				))}
			</ul>
			<h3 className='mt-4 text-lg font-semibold'>Amenities</h3>
			<ul className='list-disc pl-5'>
				{property.amenities.map((amenity, index) => (
					<li key={index}>{amenity}</li>
				))}
			</ul>
			<h3 className='mt-4 text-lg font-semibold'>Monthly Payments</h3>
			<ul className='list-disc pl-5'>
				{Object.entries(property.monthlyPayments).map(([key, value]) => (
					<li key={key}>{`${
						key.charAt(0).toUpperCase() + key.slice(1)
					}: ${value}`}</li>
				))}
			</ul>
			<h3 className='mt-4 text-lg font-semibold'>Policies</h3>
			<ul className='list-disc pl-5'>
				{Object.entries(property.policies).map(([key, value]) => (
					<li key={key}>{`${
						key.charAt(0).toUpperCase() + key.slice(1)
					}: ${value}`}</li>
				))}
			</ul>
		</div>
	);
};

export default PropertyDetails;
