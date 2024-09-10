import { ExpensesOverview } from "../../components/expenses-summary/expenses-overview.components";
import { useContext } from "react";
import { getExpenses } from "../../utils/http.utils";
import { useState, useEffect } from "react";
import { ExpensesContext } from "../../store/expenses.context";
import { getDateMinusDays } from "../../utils/date.utils";
import { LoadingOverLay } from "../../ui/loading-overlay";
import { ErrorOverLay } from "../../ui/error-overlay";
export const RecentExpense = () => {
	const [isFetching, setIsFetching] = useState(true);
	const [error, setError] = useState("");
	const { expenses, setExpenses } = useContext(ExpensesContext);
	const errorHandler = ()=>{setError(null)}
	useEffect(() => {
		async function getExpensesData() {
			setIsFetching(true);

			try {
				const expenses = await getExpenses();
				setExpenses(expenses.reverse());
			} catch (err) {
				setError("could not fetch expenses!! ");
			}
			setIsFetching(false);
		}
		getExpensesData();
	}, []);
	const recentExpenses = expenses.filter((item) => {
		const today = new Date();
		const date7DaysAgo = getDateMinusDays(today, 100);
		return item.date > date7DaysAgo;
	});
	if (error && !isFetching) {
		return <ErrorOverLay message={error} onConfirm={errorHandler}/>;
	}
	if (isFetching) {
		return <LoadingOverLay />;
	}
	return (
		<ExpensesOverview
			periodName="Last 7 Days"
			expenses={recentExpenses}
			fallbackText="No expenses registered for the last 7 days"
		/>
	);
};
