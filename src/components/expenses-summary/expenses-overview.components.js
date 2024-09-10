import { View } from "react-native";
import { ExpensesList } from "./expenses-list/expenses-list.components";
import { Styles } from "./expenses-overview.styles";
export const ExpensesOverview = ({expenses, periodName,fallbackText }) => {
	return (
		<View style={Styles.outerContainer}>
			<View style={Styles.innerContainer}>
				<ExpensesList expenses={expenses} periodName={periodName} fallbackText={fallbackText } />
			</View>
		</View>
	);
};
