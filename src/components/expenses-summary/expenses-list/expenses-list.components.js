import { View, Text, FlatList } from "react-native";
import { RenderExpenseItem } from "./render-expenses.components";
import { ExpensesSummary } from "../expenses-summary/expenses-summary.components";
import { useNavigation } from "@react-navigation/native";
export const ExpensesList = ({ expenses, periodName }) => {
	return (
		<View>
			<FlatList
					data={expenses}
				keyExtractor={(item) => item.id}
				renderItem={RenderExpenseItem}
				ListHeaderComponent={
					<ExpensesSummary periodName={periodName} expenses={expenses} />
				}
			/>
		</View>
	);
};
