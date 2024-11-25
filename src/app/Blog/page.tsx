import React from 'react';
import Link from 'next/link';
import Blog from './components/Blog'; // Ensure Blog component is correctly implemented
import Image from 'next/image';
import pic from '../../../public/images/pic.jpg'; // Example image
import BlogCard from './components/BlogCard';
import AdCard from '../components/AdCard';
import BlogCategoryCarousel from './components/BlogCategoryCarousel';

const blogPosts = [
	{
		id: 1,
		slug: 'musk-regulators',
		title: "Musk Faces Regulators' Questions",
		excerpt: 'Musk abruptly cancelled a deposition...',
		image: pic,
		category: 'Business', // Added category
		readTime: '5 min read', // Added read time
	},
	{
		id: 2,
		slug: 'tenant-rights',
		title: 'Understanding Tenant Rights',
		excerpt: 'A comprehensive guide to tenant rights...',
		image: pic,
		category: 'Legal', // Added category
		readTime: '4 min read', // Added read time
	},
	{
		id: 3,
		slug: 'landlord-tenant-law',
		title: 'Landlord-Tenant Law Explained',
		excerpt: 'Everything you need to know about landlord-tenant law...',
		image: pic,
		category: 'Legal', // Added category
		readTime: '6 min read', // Added read time
	},
	{
		id: 4,
		slug: 'rental-agreements',
		title: 'Understanding Rental Agreements',
		excerpt: 'Key elements of rental agreements to consider...',
		image: pic,
		category: 'Real Estate', // Added category
		readTime: '5 min read', // Added read time
	},
	{
		id: 5,
		slug: 'property-management-tips',
		title: 'Property Management Tips',
		excerpt: 'Tips for effective property management...',
		image: pic,
		category: 'Management', // Added category
		readTime: '4 min read', // Added read time
	},
	{
		id: 6,
		slug: 'buying-a-home',
		title: 'Tips for Buying a Home',
		excerpt: 'What to consider when buying your first home...',
		image: pic,
		category: 'Buying', // Added category
		readTime: '5 min read', // Added read time
	},
	{
		id: 7,
		slug: 'home-renovation-tips',
		title: 'Home Renovation Tips',
		excerpt: 'How to successfully renovate your home...',
		image: pic,
		category: 'Renovation', // Added category
		readTime: '7 min read', // Added read time
	},
	{
		id: 8,
		slug: 'real-estate-investing',
		title: 'Real Estate Investing 101',
		excerpt: 'Basics of investing in real estate...',
		image: pic,
		category: 'Investing', // Added category
		readTime: '6 min read', // Added read time
	},
	{
		id: 9,
		slug: 'property-market-trends',
		title: 'Current Property Market Trends',
		excerpt: 'What’s trending in the property market today...',
		image: pic,
		category: 'Market', // Added category
		readTime: '5 min read', // Added read time
	},
	{
		id: 10,
		slug: 'energy-efficiency-tips',
		title: 'Energy Efficiency Tips for Homeowners',
		excerpt: 'How to make your home more energy efficient...',
		image: pic,
		category: 'Sustainability', // Added category
		readTime: '4 min read', // Added read time
	},
];

const BlogPage = () => {
	return (
		<div className='mx-auto p-4 rounded-lg max-w-7xl'>
			<BlogCategoryCarousel />
			<Blog />
			<div className='border md:border-gray-600 p-4 mb-6 rounded-lg'>
				<h1 className='text-xl font-bold mb-6'>Latest Blog Posts</h1>
				<div className='grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-2'>
					{blogPosts.slice(0, 4).map((post) => (
						<BlogCard key={post.id} post={post} />
					))}
				</div>
				<Link href='/blogs' className='flex text-blue-600 font-semibold mt-2  '>
					See More
				</Link>
			</div>
			<AdCard />
			<div className='sm:border border-gray-600 p-4 mt-10 rounded-lg'>
				<h2 className='text-xl font-bold mb-4'>Top 10 Must Read</h2>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4'>
					{blogPosts.slice(0, 10).map((post, index) => (
						<div key={post.id} className='border-l-2 border-gray-500 pl-4 mb-4'>
							<div className='flex items-start'>
								<span className='text-2xl font-bold text-gray-600 mr-2'>
									{index + 1}
								</span>
								<div className='flex-1'>
									<div className='flex items-center justify-between mt-2 text-gray-500'>
										<span className='text-sm font-medium'>{post.category}</span>
										<span className='text-sm font-medium'>{post.readTime}</span>
									</div>
									<h3 className='font-semibold text-lg text-gray-800'>
										{post.title}
									</h3>
									<p className='text-gray-700 mt-1'>{post.excerpt}</p>
								</div>
							</div>
						</div>
					))}
					<Link href='/blogs' className='text-blue-600 font-semibold mt-2'>
						See More
					</Link>
				</div>
			</div>

			<div className='my-2 sm:border-b border-gray-600 p-4'>
				<h2 className='text-xl font-bold my-2'>More Posts</h2>
				<Blog />
				<Link
					href='/blogs'
					className='text-blue-600 font-semibold mt-2 inline-block'>
					See More
				</Link>
			</div>
		</div>
	);
};

export default BlogPage;
