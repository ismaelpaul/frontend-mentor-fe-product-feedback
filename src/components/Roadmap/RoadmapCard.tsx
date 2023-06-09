import { Link } from 'react-router-dom';
import Card from '../Card/Card';
import RoadmapItems from './RoadmapItems';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { useCallback, useEffect } from 'react';
import {
	IN_PROGRESS_REQUESTS,
	LIVE_REQUESTS,
	PLANNED_REQUESTS,
	SUGGESTION_REQUESTS,
} from '../../redux/features/filteredRequests/filteredRequestsSlice';

const RoadmapCard = () => {
	const cardClass =
		'bg-white w-56 h-44 rounded-lg p-6 laptop:w-[15.938rem] laptop:h-auto laptop:p-8';

	const { productRequests } = useSelector(
		(state: RootState) => state.productRequests
	);

	const getProductRequests = useCallback(() => {
		const dataString = localStorage.getItem('productRequests');
		if (dataString !== null) {
			const data = JSON.parse(dataString);
			return data;
		}
		return null;
	}, [productRequests]);

	const inProgress = useSelector(
		(state: RootState) => state.filteredRequests.inProgress
	);
	const planned = useSelector(
		(state: RootState) => state.filteredRequests.planned
	);
	const live = useSelector((state: RootState) => state.filteredRequests.live);

	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		const fetchedProductRequests = getProductRequests();
		if (fetchedProductRequests) {
			dispatch(IN_PROGRESS_REQUESTS(fetchedProductRequests));
			dispatch(PLANNED_REQUESTS(fetchedProductRequests));
			dispatch(LIVE_REQUESTS(fetchedProductRequests));
			dispatch(SUGGESTION_REQUESTS(fetchedProductRequests));
		}
	}, []);

	return (
		<div className="px-6 tablet:px-0">
			<Card cardClass={cardClass}>
				<div className="flex justify-between font-jost mb-6">
					<h1 className=" text-dark-slate-blue text-title18px font-bold tracking-tightier ">
						Roadmap
					</h1>
					<Link to={'/roadmap'}>
						<span className="text-blue underline text-subtitleMobile hover:text-cornflower-blue ">
							View
						</span>
					</Link>
				</div>
				<RoadmapItems planned={planned} inProgress={inProgress} live={live} />
			</Card>
		</div>
	);
};

export default RoadmapCard;
