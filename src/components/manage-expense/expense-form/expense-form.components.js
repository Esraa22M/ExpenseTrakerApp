import { View, Text } from "react-native";
import { InputContext } from "../../../store/inputs.context";
import { ExpenseInput } from "../expense-input/expenses-input.components";
import { styles } from "./expenses-form.styles";
import { useContext } from "react";
export const ExpensesForm = () => {
	const { inputs, setInputs } = useContext(InputContext);
	const inputChangeHandler = (inputIdentifier, enteredValue) => {
		setInputs((current) => {
			return {
				...current,
				[inputIdentifier]: { value: enteredValue, isValid: true },
			};
		});
	};
	const formIsInValid =
		!inputs.title.isValid ||
		!inputs.amount.isValid ||
		!inputs.date.isValid ||
		!inputs.description.isValid;

	return (
		<View>
			<ExpenseInput
				label="Title"
				invalid={!inputs.title.isValid}
				textInputConfig={{
					value: inputs.title.value,
					onChangeText: inputChangeHandler.bind(this, "title"),
				}}
			/>
			<ExpenseInput
				label="Amount"
				invalid={!inputs.amount.isValid}
				textInputConfig={{
					value: inputs.amount.value,
					onChangeText: inputChangeHandler.bind(this, "amount"),
					keyboardType: "decimal-pad",
					onChangeText: inputChangeHandler.bind(this, "amount"),
				}}
			/>
			<ExpenseInput
				label="Date"
				invalid={!inputs.date.isValid}
				textInputConfig={{
					value: inputs.date.value,
					placeholder: "YYYY-MM-DD",
					maxLength: 10,
					onChangeText: inputChangeHandler.bind(this, "date"),
				}}
			/>
			<ExpenseInput
				label="Description"
				invalid={!inputs.description.isValid}
				textInputConfig={{
					value: inputs.description.value,
					multiline: true,
					onChangeText: inputChangeHandler.bind(this, "description"),
				}}
			/>
			{formIsInValid && (
				<View style={styles.errorContainer}>
					<Text style={styles.errorStyle}>
						form is invalid please check your entered data!!
					</Text>
				</View>
			)}
		</View>
	);
};
