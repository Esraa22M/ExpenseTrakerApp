import { View } from "react-native";
import { ExpensesOverview } from "../../components/expenses-summary/expenses-overview.components";
import { styles } from "./all-expenses.styles";
export const AllExpense = () => {
	return<View style={styles.container}><ExpensesOverview periodName={"Total"}  /></View>
};
