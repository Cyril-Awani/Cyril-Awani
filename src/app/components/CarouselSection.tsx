'use client';

import { useState, Dispatch, SetStateAction } from 'react';
import PropertyCard from '@/app/PropertyListing/components/PropertyCard';
import { motion } from 'framer-motion';

type CardData = {
	title: string;
	address: string;
	images: string[];
	featuredLabel?: string;
	viewsCount: number;
	price: string;
	beds: number;
	baths: number;
};

type CarouselSectionProps = {
	title: string;
	cardData: CardData[];
};

const CarouselSection = ({ title, cardData }: CarouselSectionProps) => {
	const [currentIndex, setCurrentIndex]: [
		number,
		Dispatch<SetStateAction<number>>,
	] = useState(0);

	const nextSlide = () => {
		if (currentIndex < cardData.length - 1) {
			setCurrentIndex(currentIndex + 1);
		}
	};

	const prevSlide = () => {
		if (currentIndex > 0) {
			setCurrentIndex(currentIndex - 1);
		}
	};

	return (
		<div className='max-w-8xl bg-white px-4 sm:px-6 lg:px-4 mx-auto py-2 mt-4'>
			<div className='flex justify-between items-center mb-6'>
				<h2 className='text-2xl font-semibold text-gray-800 dark:text-white'>
					{title}
				</h2>
				<div className='flex items-center gap-2'>
					<button
						onClick={prevSlide}
						aria-label='Previous'
						className='p-2 bg-white dark:bg-gray-950 rounded-full shadow-md transition hover:bg-blue-100 dark:hover:bg-blue-700'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 20 20'
							fill='currentColor'
							className='w-6 h-6 text-gray-700 dark:text-gray-300'>
							<path
								fillRule='evenodd'
								d='M18 10a.75.75 0 01-.75.75H4.66l2.1 1.95a.75.75 0 11-1.02 1.1l-3.5-3.25a.75.75 0 010-1.1l3.5-3.25a.75.75 0 111.02 1.1l-2.1 1.95h12.59A.75.75 0 0118 10z'
								clipRule='evenodd'
							/>
						</svg>
					</button>

					<button
						onClick={nextSlide}
						aria-label='Next'
						className='p-2 bg-white dark:bg-gray-950 rounded-full shadow-md transition hover:bg-blue-100 dark:hover:bg-blue-700'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 20 20'
							fill='currentColor'
							className='w-6 h-6 text-gray-700 dark:text-gray-300'>
							<path
								fillRule='evenodd'
								d='M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5-3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z'
								clipRule='evenodd'
							/>
						</svg>
					</button>
				</div>
			</div>

			<div className='max-w-max'>
				<div className='flex items-center'>
					<div className='overflow-hidden overflow-x-auto scrollbar-hide h-[27rem] snap-x snap-mandatory'>
						<motion.div
							className='flex flex-nowrap'
							initial={{ x: 0 }}
							animate={{ x: -currentIndex * 316 }} // Adjust according to card width
							transition={{ type: 'spring', stiffness: 300, damping: 30 }}>
							{cardData.map((card, index) => (
								<motion.div
									className={`p-2 flex-shrink-0 snap-start ${
										index === cardData.length - 1 ? 'mr-0' : 'mr-4'
									}`}
									key={index}
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.3, delay: index * 0.1 }}>
									<PropertyCard
										title={card.title}
										address={card.address}
										images={card.images}
										featuredLabel={card.featuredLabel}
										viewsCount={card.viewsCount}
										price={card.price}
										beds={card.beds}
										baths={card.baths}
									/>
								</motion.div>
							))}
						</motion.div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CarouselSection;
