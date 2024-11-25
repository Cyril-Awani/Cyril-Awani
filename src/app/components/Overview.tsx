'use client';
import React, { useState } from 'react';
import { CheckCircleOutline } from '@mui/icons-material';
import {
	CheckCircleOutline as CheckCircleOutlineIcon,
	ArrowForwardIos as ArrowForwardIosIcon,
	OtherHouses as OtherHousesIcon,
	Bed as BedIcon,
	Shower as ShowerIcon,
	AvTimer as AvTimerIcon,
	Pets as PetsIcon,
	Pool as PoolIcon,
	FitnessCenter as FitnessCenterIcon,
	LocalParking as LocalParkingIcon,
	Elevator as ElevatorIcon,
	Security as SecurityIcon,
	Wifi as WifiIcon,
	Balcony as BalconyIcon,
	Fireplace as FireplaceIcon,
	Yard as GardenIcon,
	Soap as SoapIcon,
	Accessible as AccessibleIcon,
	Spa as SpaIcon,
	SportsTennis as SportsTennisIcon,
	Toys as ToysIcon,
	Business as BusinessIcon,
	MeetingRoom as MeetingRoomIcon,
	Store as StoreIcon,
	OutdoorGrill as OutdoorGrillIcon,
	Power as PowerIcon,
} from '@mui/icons-material';
import { Disclosure, DisclosureButton } from '@headlessui/react';

const brief = {
	description: `This individually owned and managed property is a clean and well-kept 3 bedroom, 2 bathroom house in Bixby is 1527 sq. ft and has a 2 car garage with electric garage door opener. Backyard has a covered patio where you could enjoy breakfast on your days off. The back of the house is on the east so the yard receives morning sun, but has shade in hot afternoons. The spacious living room has plenty of space for two large couches or a sectional plus comfortable chairs, a coffee table and a desk and chair for a home office space.`,
};

const interiorFeatures = [
	'Beds: 4',
	'Baths: 3',
	'Floor: Tiled Floors',
	'Kitchen-Top: Granite Countertops',
	'Wardrobe',
];

const basicDetails = [
	{
		icon: <OtherHousesIcon className='w-5 h-5 text-txt' />,
		label: 'Duplex',
		description: 'Property Type',
	},
	{
		icon: <BedIcon className='w-5 h-5 text-txt' />,
		label: '2',
		description: 'Bedroom',
	},
	{
		icon: <ShowerIcon className='w-5 h-5 text-txt' />,
		label: '3',
		description: 'Bathroom',
	},
	{
		icon: <AvTimerIcon className='w-5 h-5 text-txt' />,
		label: '3rd April',
		description: 'Available From',
	},
	{
		icon: <PetsIcon className='w-5 h-5 text-txt' />,
		label: 'Yes',
		description: 'Pets',
	},
];

const exteriorFeatures = [
	'Garage',
	'Swimming Pool',
	'Large Backyard',
	'Outdoor Kitchen',
];

const monthlyPayments = [
	{
		name: 'Security Fee',
		amount: '100',
		description: 'Monthly security service fee',
	},
	{
		name: 'Garbage and Trash',
		amount: '50',
		description: 'Monthly waste management fee',
	},
	{ name: 'Gas', amount: '70', description: 'Average monthly gas bill' },
	{
		name: 'Electricity',
		amount: '120',
		description: 'Average monthly electricity bill',
	},
	{ name: 'Water', amount: '40', description: 'Monthly water bill' },
];

const landlordPolicies = [
	{
		policy: 'Pets Allowed',
		description: 'Small pets are welcome. Extra deposit required.',
	},
	{
		policy: 'Smoking Policy',
		description: 'No smoking allowed inside the property.',
	},
	{
		policy: 'Subletting',
		description: 'Subletting is permitted with prior approval.',
	},
	{
		policy: 'Renovation',
		description: 'Renovation and hanging is considered destructive to property',
	},
];

const Overview = () => {
	const amenities = [
		{ name: 'Air Conditioning', icon: CheckCircleOutlineIcon },
		{ name: 'Swimming Pool', icon: PoolIcon },
		{ name: 'Fitness Center', icon: FitnessCenterIcon },
		{ name: 'Parking Garage', icon: LocalParkingIcon },
		{ name: 'Elevator', icon: ElevatorIcon },
		{ name: '24/7 Security', icon: SecurityIcon },
		{ name: 'Pet Friendly', icon: PetsIcon },
		{ name: 'High-Speed Internet', icon: WifiIcon },
		{ name: 'Balcony', icon: BalconyIcon },
		{ name: 'Fireplace', icon: FireplaceIcon },
		{ name: 'Garden', icon: GardenIcon },
		{ name: 'Washer/Dryer', icon: SoapIcon },
		{ name: 'Wheelchair Accessible', icon: AccessibleIcon },
		{ name: 'Spa', icon: SpaIcon },
		{ name: 'Tennis Court', icon: SportsTennisIcon },
		{ name: 'Playground', icon: ToysIcon },
		{ name: 'Business Center', icon: BusinessIcon },
		{ name: 'Conference Room', icon: MeetingRoomIcon },
		{ name: 'Storage Units', icon: StoreIcon },
		{ name: 'BBQ Area', icon: OutdoorGrillIcon },
		{ name: 'Prepaid', icon: PowerIcon },
	];

	const sortedAmenities = amenities.sort((a, b) =>
		a.name.localeCompare(b.name),
	);
	const [visibleItems, setVisibleItems] = useState(10);
	const showMoreItems = () => setVisibleItems((prev) => prev + 10);

	return (
		<div>
			<p className='text-xl font-semibold mx-4 my-2'>Overview</p>
			<p className='text-sm text-gray-700 capitalize ml-4'>
				{brief.description}
			</p>
			<div className='grid grid-cols-2 md:grid-cols-3 gap-4 px-6 mt-5'>
				{basicDetails.map((detail, index) => (
					<div key={index} className='flex items-center'>
						<div>{detail.icon}</div>
						<div className='ml-2'>
							<p className='text-base font-semibold'>{detail.label}</p>
							<p className='text-sm text-gray-500'>{detail.description}</p>
						</div>
					</div>
				))}
			</div>
			{/* Accordions */}
			<ul className='max-w-full mx-auto mt-5 divide-y rounded-xl'>
				<li>
					<Disclosure>
						{({ open }) => (
							<>
								<Disclosure.Button className='accordion-button flex items-center justify-between w-full px-6 py-4 font-medium text-left text-btn hover:cursor-pointer hover:border-b-2 border-btn'>
									<span className='text-base font-semibold text-gray-900'>
										Features
									</span>
									<ArrowForwardIosIcon
										className={`w-5 h-5 text-btn transition-transform  duration-300 ${
											open ? 'rotate-90' : ''
										}`}
									/>
								</Disclosure.Button>
								<Disclosure.Panel className='accordion-panel px-6 py-4 border-x border-b border-btn text-gray-700 text-base'>
									<div className='flex flex-col sm:flex-row sm:space-x-8 space-y-6 sm:space-y-0 justify-center m-4'>
										{/* Interior Features */}
										<div className='sm:w-1/2'>
											<h3 className='text-sm font-bold text-gray-500 border border-gray-700 p-3 rounded-md mb-4'>
												Interior Features
											</h3>
											<ul className='list-none space-y-2'>
												{interiorFeatures.map((feature, index) => (
													<li key={index} className='text-sm text-gray-700'>
														<CheckCircleOutline className='h-5 w-5 text-txt mr-2' />
														{feature}
													</li>
												))}
											</ul>
										</div>

										{/* Exterior Features */}
										<div className='sm:w-1/2'>
											<h3 className='text-sm font-bold text-gray-500 border border-gray-600 p-3 rounded-md mb-4'>
												Exterior Features
											</h3>
											<ul className='list-none pl-5 space-y-2'>
												{exteriorFeatures.map((feature, index) => (
													<li key={index} className='text-sm text-gray-700'>
														<CheckCircleOutline className='h-5 w-5 text-txt mr-2' />
														{feature}
													</li>
												))}
											</ul>
										</div>
									</div>
								</Disclosure.Panel>
							</>
						)}
					</Disclosure>
				</li>

				<li>
					<Disclosure>
						{({ open }) => (
							<>
								<DisclosureButton className='accordion-button flex items-center justify-between w-full px-6 py-4 font-medium text-left text-btn hover:cursor-pointer hover:border-b-2 border-btn'>
									<span className='text-base font-semibold text-gray-900'>
										Amenities
									</span>
									<ArrowForwardIosIcon
										className={`w-5 h-5 text-btn transition-transform  duration-300 ${
											open ? 'rotate-90' : ''
										}`}
									/>
								</DisclosureButton>
								<Disclosure.Panel className='accordion-panel px-6 pb-4 border-x border-b border-btn text-gray-700 text-base'>
									<div className='max-w-4xl mx-auto my-2'>
										<ul className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8'>
											{sortedAmenities
												.slice(0, visibleItems)
												.map((amenity, index) => {
													const IconComponent = amenity.icon; // Assign icon dynamically
													return (
														<li
															key={index}
															className='text-sm text-gray-700 flex items-center'>
															<IconComponent className='h-5 w-5 text-txt mr-2' />{' '}
															{/* Display the icon */}
															{amenity.name}
														</li>
													);
												})}
										</ul>
										{visibleItems < sortedAmenities.length && (
											<div className='relative'>
												<button
													className='text-sm text-txt font-semibold hover:underline absolute right-2/4 bottom-2'
													onClick={showMoreItems}>
													Show More
												</button>
											</div>
										)}
									</div>
								</Disclosure.Panel>
							</>
						)}
					</Disclosure>
				</li>

				<li>
					<Disclosure>
						{({ open }) => (
							<>
								<DisclosureButton className='accordion-button flex items-center justify-between w-full px-6 py-2 font-medium text-left text-gray-900 hover:cursor-pointer hover:border-b-2 hover:border-btn'>
									<span className='text-base font-semibold text-gray-900'>
										Monthly Payments
									</span>
									<ArrowForwardIosIcon
										className={`w-5 h-5 text-btn transition-transform  duration-300 ${
											open ? 'rotate-90' : ''
										}`}
									/>
								</DisclosureButton>
								<Disclosure.Panel className='accordion-panel px-4 pb-1 border-x border-b border-btn text-gray-700 text-base'>
									<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 m-4'>
										{monthlyPayments.map((payment, index) => (
											<div
												key={index}
												className='bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105'>
												<div className='p-4'>
													<h4 className='text-sm font-bold text-gray-600'>
														{payment.name}
													</h4>
													<p className='text-lg font-semibold text-txt'>
														₦{payment.amount}
													</p>
													<p className='text-xs text-gray-600 mt-2'>
														{payment.description}
													</p>
												</div>
											</div>
										))}
									</div>
								</Disclosure.Panel>
							</>
						)}
					</Disclosure>
				</li>
				<li>
					<Disclosure>
						{({ open }) => (
							<>
								<DisclosureButton className='accordion-button flex items-center justify-between w-full px-6 py-4 font-medium text-left text-gray-900 hover:cursor-pointer  hover:border-b-2 border-btn'>
									<span className='text-base font-semibold text-gray-900'>
										Policies
									</span>
									<ArrowForwardIosIcon
										className={`w-5 h-5 text-btn transition-transform  duration-300 ${
											open ? 'rotate-90' : ''
										}`}
									/>
								</DisclosureButton>
								<Disclosure.Panel className='accordion-panel border-x border-b px-4 pb-4 text-gray-700 text-base'>
									<div className='grid grid-cols-1 sm:grid-cols-2 gap-6 m-4'>
										{landlordPolicies.map((policy, index) => (
											<div
												key={index}
												className='bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105'>
												<div className='p-4'>
													<h4 className='text-sm font-bold text-txt'>
														{policy.policy}
													</h4>
													<p className='text-xs text-gray-600 mt-2'>
														{policy.description}
													</p>
												</div>
											</div>
										))}
									</div>
								</Disclosure.Panel>
							</>
						)}
					</Disclosure>
				</li>
			</ul>
		</div>
	);
};

export default Overview;
