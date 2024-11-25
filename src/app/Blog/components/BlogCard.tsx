import Link from 'next/link';
import Image from 'next/image';

interface BlogCardProps {
	post: {
		slug: string;
		image: string;
		title: string;
		excerpt: string;
		category: string; // Add category
		readTime: string; // Add read time
	};
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
	return (
		<Link href={`/blog/${post.slug}`}>
			<div className='w-full h-52 relative group'>
				<Image
					src={post.image}
					alt={post.title}
					width={300}
					height={150}
					className='w-full h-full object-cover rounded-lg'
				/>
				{/* Overlay */}
				<div className='absolute inset-0 bg-black bg-opacity-10 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg'></div>
			</div>
			<h2 className='text-xl text-gray-600 font-semibold mt-4 transition-colors duration-300 group-hover:text-black'>
				{post.title}
			</h2>
			<p className='text-gray-400 mt-2'>{post.excerpt}</p>
			<div className='flex items-center justify-between mt-2 text-gray-500'>
				<span className='text-sm'>{post.category}</span>
				<span className='text-sm'>{post.readTime}</span>
			</div>
		</Link>
	);
};

export default BlogCard;
