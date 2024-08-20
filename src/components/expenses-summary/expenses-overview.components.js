import { View, ScrollView } from "react-native";
import { ExpensesSummary } from "./expenses-summary/expenses-summary.components";
import { ExpensesList } from "./expenses-list/expenses-list.components";
import { dummyData } from "../../backend/data";
import { Styles } from "./expenses-overview.styles";
export const ExpensesOverview = ({ expenses, periodName }) => {
	return (
		<View style={Styles.outerContainer}>
			<View style={Styles.innerContainer}>
				<ExpensesList expenses={dummyData} periodName={periodName} />
			</View>
		</View>
	);
};
