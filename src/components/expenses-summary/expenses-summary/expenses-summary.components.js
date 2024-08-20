import { View, Text } from "react-native";
import { Styles } from "./expenses-summary.styles";
export const ExpensesSummary = ({periodName , expenses}) => {
    const expensesSum = expenses.reduce((sum ,item)=> sum+item.amount , 0)
	return (
		<View style={Styles.container}>
            <Text style={Styles.summaryPeriodTime}>{periodName }</Text>
            <Text style={Styles.summaryTotal}>$ {expensesSum.toFixed(2)}</Text>
		</View>
	);
};
