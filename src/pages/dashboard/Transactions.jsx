import AddTransaction from '../../components/AddTransaction';
import Table from '../../components/CustomTable';
import SectionHeading from '../../components/SectionHeading';
import { data } from '../../data';

export default function Transactions() {
	return (
		<div className="mt-10">
			<div className="flex items-center justify-between">
				<SectionHeading
					title={'Transactions'}
					description={'List of your recent transactions'}
				/>

				<AddTransaction />
			</div>

			{/* Transaction table */}
			<div className="mt-10">
				<Table data={data} />
			</div>
		</div>
	);
}
