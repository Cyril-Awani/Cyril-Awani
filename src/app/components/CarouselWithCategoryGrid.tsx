import React, { useState, useEffect } from 'react';

type Category = 'kitchen' | 'living' | 'bathroom' | 'exterior' | 'others';

const images: Record<Category, string[]> = {
	kitchen: [
		'https://images.unsplash.com/photo-1504675099198-7023dd85f5a3?q=80&w=2940&auto=format&fit=crop',
		'https://images.unsplash.com/photo-1571104508999-893933ded431?q=80&w=2940&auto=format&fit=crop',
	],
	living: [
		'https://images.unsplash.com/photo-1571104508999-893933ded431?q=80&w=2940&auto=format&fit=crop',
	],
	bathroom: [
		'https://images.unsplash.com/photo-1571104508999-893933ded431?q=80&w=2940&auto=format&fit=crop',
	],
	exterior: [
		'https://images.unsplash.com/photo-1725776339684-30dda601552e?w=500&auto=format&fit=crop',
	],
	others: [
		'https://images.unsplash.com/photo-1571104508999-893933ded431?q=80&w=2940&auto=format&fit=crop',
	],
};

const CarouselWithCategoryGrid: React.FC = () => {
	const [selectedCategories, setSelectedCategories] = useState<string[]>([
		'living',
	]);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [touchStart, setTouchStart] = useState<number | null>(null);
	const [touchEnd, setTouchEnd] = useState<number | null>(null);

	// Filter images based on selected categories
	const allImages = Object.values(images).flat();

	const nextSlide = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % allImages.length);
	};

	const prevSlide = () => {
		setCurrentIndex(
			(prevIndex) => (prevIndex - 1 + allImages.length) % allImages.length,
		);
	};

	const handleCategoryClick = (category: string) => {
		setSelectedCategories((prev) =>
			prev.includes(category)
				? prev.filter((cat) => cat !== category)
				: [...prev, category],
		);
		setCurrentIndex(0);
	};

	const handleTouchStart = (e: React.TouchEvent) => {
		setTouchStart(e.touches[0].clientX);
	};

	const handleTouchEnd = (e: React.TouchEvent) => {
		setTouchEnd(e.changedTouches[0].clientX);
	};

	useEffect(() => {
		if (touchStart !== null && touchEnd !== null) {
			const swipeDistance = touchStart - touchEnd;
			const threshold = 50;

			if (swipeDistance > threshold) {
				nextSlide();
			} else if (swipeDistance < -threshold) {
				prevSlide();
			}

			setTouchStart(null);
			setTouchEnd(null);
		}
	}, [touchStart, touchEnd]);

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'ArrowRight') {
				nextSlide();
			} else if (event.key === 'ArrowLeft') {
				prevSlide();
			}
		};

		window.addEventListener('keydown', handleKeyDown);

		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, [allImages.length]);

	return (
		<section className='bg-white rounded-lg overflow-hidden'>
			<div className='px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-2'>
				<div className='grid grid-cols-1 md:grid-cols-5 gap-2'>
					{/* Carousel Section */}
					<div className='col-span-3 md:col-span-3 flex flex-col'>
						<div
							className='relative mx-auto overflow-hidden rounded-lg'
							onTouchStart={handleTouchStart}
							onTouchEnd={handleTouchEnd}>
							{/* Image Numbering */}
							<div className='absolute top-4 left-4 z-10 text-white text-lg font-bold'>
								{currentIndex + 1} / {allImages.length}
							</div>

							<div
								className='flex transition-transform duration-500'
								style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
								{allImages.map((image, index) => (
									<div key={index} className='min-w-full'>
										<img
											src={image}
											alt={`Slide ${index}`}
											className='w-full rounded-lg'
											style={{ height: '400px', objectFit: 'cover' }}
										/>
									</div>
								))}
							</div>
							<button
								className='absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-800 hover:text-white transition-colors duration-300 w-8 h-8 flex items-center justify-center'
								onClick={prevSlide}>
								&#10094;
							</button>
							<button
								className='absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-800 hover:text-white transition-colors duration-300 w-8 h-8 flex items-center justify-center'
								onClick={nextSlide}>
								&#10095;
							</button>
						</div>
					</div>

					{/* Category Grid Section */}
					<div className='hidden col-span-3 md:col-span-2 md:flex flex-col rounded-lg'>
						<div className='grid gap-1 grid-cols-2' style={{ height: '400px' }}>
							{Object.keys(images).map((category, index) => (
								<a
									key={index}
									href='#'
									onClick={() => handleCategoryClick(category)}
									className={`group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 ${
										selectedCategories.includes(category)
											? 'border border-blue-500'
											: ''
									}`}>
									<img
										src={images[category as Category][0]}
										alt={`${category} Image`}
										className='absolute inset-0 h-full w-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-500 ease-in-out'
									/>
									<div className='absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5 rounded-lg'></div>
									<p className='z-10 text-base font-medium text-white absolute bottom-0 right-0 p-2 lg:text-xl'>
										{category.charAt(0).toUpperCase() + category.slice(1)}
									</p>
								</a>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CarouselWithCategoryGrid;
