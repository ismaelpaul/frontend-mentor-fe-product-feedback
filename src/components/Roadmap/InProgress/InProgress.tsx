import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { ProductRequests } from '../../../interfaces/IProductRequests';
import FeedbackCard from '../../Feedback/FeedbackCard';
import { useLocation } from 'react-router';

const InProgress = () => {
	const inProgressContent = useSelector(
		(state: RootState) => state.filteredRequests.inProgress
	);

	const location = useLocation();
	const { pathname } = location;

	return (
		<div className="mt-8 flex-1 w-0">
			<h1 className="text-dark-slate-blue text-text14px font-bold tracking-tightier mb-1 laptop:text-title18px">
				{'In-Progress' + ' ' + `(${inProgressContent.length})`}
			</h1>
			<p className="text-light-slate-blue text-text14px mb-6 laptop:text-text16px">
				Currently being developed
			</p>
			<main className={`${pathname === '/roadmap' ? 'mx-0' : 'mx-10'}`}>
				{inProgressContent.map((request: ProductRequests) => {
					return (
						<article
							key={request._id}
							className="my-6 flex flex-col gap-4 tablet:my-0 tablet:mb-4 "
						>
							<FeedbackCard singleRequest={request} />
						</article>
					);
				})}
			</main>
		</div>
	);
};

export default InProgress;
