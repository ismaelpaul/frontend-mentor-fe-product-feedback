interface ArrowDownProps {
	className?: string;
}

const ArrowDown = ({ className }: ArrowDownProps) => {
	return (
		<svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
			<path
				className={className}
				d="M1 1l4 4 4-4"
				stroke="#4661E6"
				strokeWidth="2"
				fill="none"
				fillRule="evenodd"
			/>
		</svg>
	);
};

export default ArrowDown;
