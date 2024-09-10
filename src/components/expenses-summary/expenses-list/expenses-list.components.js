import { View, Text, FlatList } from "react-native";
import { RenderExpenseItem } from "./render-expenses.components";
import { ExpensesSummary } from "../expenses-summary/expenses-summary.components";
import { styles } from "./expenses-list-styles";
export const ExpensesList = ({ expenses, periodName, fallbackText }) => {
	let content = (
		<View>
			<ExpensesSummary periodName={periodName} expenses={expenses} />

			<Text style={styles.infoText}>{fallbackText}</Text>
		</View>
	);
	if (expenses.length > 0) {
		content = (
			<FlatList
				data={expenses}
				keyExtractor={(item) => item.id}
				renderItem={RenderExpenseItem}
				ListHeaderComponent={
					<ExpensesSummary periodName={periodName} expenses={expenses} />
				}
			/>
		);
	}
	return <View>{ content}</View>;
};
