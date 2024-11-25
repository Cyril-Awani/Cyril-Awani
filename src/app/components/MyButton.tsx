import React, { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	disabled?: boolean;
}

const MyButton: React.FC<ButtonProps> = ({
	children,
	disabled,
	className,
	...props
}) => {
	return (
		<button
			className={clsx(
				'bg-[#332cf2] text-white font-bold text-sm leading-[1.3] px-2 py-2 rounded-md',
				'transition-transform duration-200 transform hover:scale-105 active:translate-y-[0.125rem]',
				'disabled:text-[#787878] disabled:cursor-auto',
			)}
			disabled={disabled}
			{...props}>
			{children}
		</button>
	);
};

export default MyButton;
