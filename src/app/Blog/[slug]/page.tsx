import { notFound } from 'next/navigation';
import Image from 'next/image';
import pic from '@/app/asset/images/pic.jpg'; // Ensure this path is correct

const blogPosts = [
	{
		id: 1,
		slug: 'musk-regulators',
		title: "Musk Faces Regulators' Questions",
		content: 'Musk abruptly cancelled a deposition...',
		image: pic,
	},
	{
		id: 2,
		slug: 'tenant-rights',
		title: 'Understanding Tenant Rights',
		content: 'A comprehensive guide to tenant rights...',
		image: pic,
	},
	{
		id: 2,
		slug: 'tenant-rights',
		title: 'Understanding Tenant Rights',
		content: 'A comprehensive guide to tenant rights...',
		image: pic,
	},
	// Add more blog posts here
];

// Function to get a blog post by slug
const getBlogPost = (slug: string) => {
	return blogPosts.find((post) => post.slug === slug);
};

const BlogStory = ({ params }: { params: { slug: string } }) => {
	console.log('Current slug:', params.slug); // This should log the slug

	const post = getBlogPost(params.slug);

	if (!post) {
		return notFound(); // Render a 404 page if the post is not found
	}

	return (
		<div className='max-w-7xl mx-auto p-4'>
			<h1 className='text-4xl font-bold mb-4'>{post.title}</h1>
			<Image
				src={post.image}
				alt={post.title}
				width={800}
				height={400}
				className='rounded-lg mb-6'
			/>
			<p className='text-gray-700 leading-7'>{post.content}</p>
		</div>
	);
};

export default BlogStory;
