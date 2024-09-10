import { Pressable, Text, View } from "react-native";
import Fontisto from "@expo/vector-icons/Fontisto";
import { GlobalStyles } from "../../../constants/styles.constants";
import { styles } from "./expenses-list-styles";
import { getFormatedDate } from "../../../utils/date.utils";
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import { InputContext } from "../../../store/inputs.context";
export const ExpenseItem = ({ item }) => {
	const { setInputs } = useContext(InputContext);
	const navigation = useNavigation();
	return (
		<Pressable
			onPress={() => {
				console.log(item);
				setInputs({
					title: { value: item.title, isValid: true },
					amount: { value: `${item.amount}`, isValid: true },
					date: { value: item.date.toISOString().slice(0, 10), isValid: true },
					description: { value: item.description, isValid: true },
				});
				navigation.navigate("ManageExpense", { expenseId: item.id });
			}}
			style={({ pressed }) => {
				return [pressed && styles.pressed, styles.container];
			}}
		>
			<View style={styles.content}>
				<View style={styles.iconContainer}>
					<Fontisto
						name="shopping-package"
						size={20}
						color={GlobalStyles.colors.primary100}
					/>
				</View>
				<View style={styles.contentBoby}>
					<Text style={styles.contentHeader}>{item.title}</Text>
					<Text style={styles.contentInfo}>{item.description}</Text>
					<Text style={styles.contentInfo}>{getFormatedDate(item.date)}</Text>
				</View>
			</View>
			<View style={styles.amountContainer}>
				<Text style={styles.contentHeader}>{item.amount}$</Text>
			</View>
		</Pressable>
	);
};
