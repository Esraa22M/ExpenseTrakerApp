import { View } from "react-native";
import { useContext } from "react";
import { ExpensesOverview } from "../../components/expenses-summary/expenses-overview.components";
import { styles } from "./all-expenses.styles";
import { ExpensesContext } from "../../store/expenses.context";

export const AllExpense = () => {
	const { expenses } = useContext(ExpensesContext);

	return (
		<View style={styles.container}>
			<ExpensesOverview
				periodName={"Total"}
				expenses={expenses}
				fallbackText="No registered expenses found!!"
			/>
		</View>
	);
};
