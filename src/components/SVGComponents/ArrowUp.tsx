interface ArrowUpProps {
	className?: string;
}

const ArrowUp = ({ className }: ArrowUpProps) => {
	return (
		<svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
			<path
				className={className}
				d="M1 6l4-4 4 4"
				stroke="#4661E6"
				stroke-width="2"
				fill="none"
				fill-rule="evenodd"
			/>
		</svg>
	);
};

export default ArrowUp;