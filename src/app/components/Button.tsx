import Image from 'next/image';
import React from 'react';

type ButtonProps = {
	type: 'button' | 'submit' | 'reset';
	title: string;
	icon?: string | React.ReactNode;
	variant?: 'blue' | 'red' | 'green' | 'gray-100';
	className?: string;
};

const Button = ({ type, title, icon, variant, className }: ButtonProps) => {
	return (
		<button
			type={type}
			className={`flex items-center gap-1 px-2 py-2 rounded-full border ${variant} ${className}`}>
			{typeof icon === 'string' ? (
				<Image src={icon} alt={title} width={24} height={24} />
			) : (
				icon
			)}
			<label className='bold-16 whitespace-nowrap'>{title}</label>
		</button>
	);
};

export default Button;
