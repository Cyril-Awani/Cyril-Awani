'use client';

import React, { useState } from 'react';
import PropertyCard from '@/app/PropertyListing/components/PropertyCard';
import propertyData from '@/app/Data/propertyData';
import AdCard from '../components/AdCard';
import CommentCard from './components/CtaCard';

const PropertyList = () => {
	const [visibleCount, setVisibleCount] = useState(5); // Number of visible cards

	const showMoreProperties = () => {
		setVisibleCount((prevCount) =>
			Math.min(prevCount + 5, propertyData.length),
		); // Increase the count of visible cards by 5
	};

	return (
		<div className='mx-auto my-2 p-4 bg-bck rounded-lg max-w-7xl'>
			<div>
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 7xl:grid-cols-5 gap-2 xl:gap-4 sm:px-2'>
					{propertyData.slice(0, visibleCount).map((property, index) => (
						<React.Fragment key={property.id}>
							<PropertyCard
								id={property.id}
								name={property.name}
								address={property.address}
								images={property.images}
								price={property.price}
								viewsCount={property.viewsCount}
								beds={property.beds}
								baths={property.baths}
							/>
							{/* Display AdCard after every 5 PropertyCards, but only if there are more than 5 visible cards */}
							{(index + 1) % 5 === 0 && index + 1 <= visibleCount && <AdCard />}
						</React.Fragment>
					))}
				</div>
				{visibleCount < propertyData.length && ( // Only show the button if there are more properties to show
					<div className='flex justify-center mt-4'>
						{/* Center the button */}
						<button
							onClick={showMoreProperties}
							className='px-4 py-2 border-2 border-btn  text-btn font-medium hover:font-bold rounded'>
							Show More
						</button>
					</div>
				)}
			</div>
			<CommentCard />
		</div>
	);
};

export default PropertyList;
