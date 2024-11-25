'use client';
import React, { useState } from 'react';
import PropertyCard from './PropertyListing/components/PropertyCard';
import propertyData from './Data/propertyData';
import AdCard from './components/AdCard';

const Home = () => {
	const [visibleCount, setVisibleCount] = useState(5); // Number of visible cards

	const showMoreProperties = () => {
		setVisibleCount((prevCount) =>
			Math.min(prevCount + 5, propertyData.length),
		);
	};

	return (
		<div>
			<h1>food</h1>
		</div>
	);
};

export default Home;
