import { useLayoutEffect } from "react";
import { View } from "react-native";
import { styles } from "./manage-expenses.styles";
import { IconButton } from "../../ui/icon-button/icon-button.components";
import { GlobalStyles } from "../../constants/styles.constants";
import { Button } from "../../ui/button/button.components";
import { useContext , useState} from "react";
import { ExpensesContext } from "../../store/expenses.context";
import { InputContext } from "../../store/inputs.context";
import { ExpensesForm } from "../../components/manage-expense/expense-form/expense-form.components";
import { storeExpense , updateExpensehttp, deleteExpensehttp} from "../../utils/http.utils";
import { LoadingOverLay } from "../../ui/loading-overlay";
export const ManageExpense = ({ route, navigation }) => {
	const editedExpense = route.params?.expenseId;
	const isEdited = !!editedExpense;
	const { deleteExpense, updateExpense, addExpense, expenses} =
		useContext(ExpensesContext);
	const { formSubmitHandler } = useContext(InputContext);
	useLayoutEffect(() => {
		navigation.setOptions({ title: isEdited ? "Edit Expense" : "Add Expense" });
	}, [navigation, isEdited]);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const deleteExpenseHandler = async () => {
		setIsSubmitting(true);
		await deleteExpensehttp(editedExpense)
		deleteExpense(editedExpense);
		setIsSubmitting(false)
		navigation.goBack();
	};
	const cancelHandler = () => {
		navigation.goBack();
	};
	const confirmHandler = async() => {
		const expenseData = formSubmitHandler();
		if (expenseData) {
			if (isEdited) {
				setIsSubmitting(true)
				updateExpense(editedExpense, {
					...expenseData,
				});
				await updateExpensehttp(editedExpense, expenseData)
			} else {
			const id =	await storeExpense(expenseData)
				addExpense({
					...expenseData,id:id
				});
			}		navigation.goBack();

		}

	};
	if(isSubmitting){return <LoadingOverLay/>}
	return (
		<View style={styles.container}>
			<ExpensesForm />
			<View style={styles.buttonsContainer}>
				<Button
					mode="flat"
					onPress={cancelHandler}
					outerContainerStyle={styles.outerContainerStyle}
				>
					Cancel
				</Button>
				<Button
					onPress={confirmHandler}
					outerContainerStyle={styles.buttonsContainer}
				>
					{isEdited ? "Update" : "Add"}
				</Button>
			</View>
			{isEdited && (
				<View style={styles.deletedContainer}>
					<IconButton
						name={"trash"}
						color={GlobalStyles.colors.dark100}
						size={36}
						onPress={deleteExpenseHandler}
					/>
				</View>
			)}
		</View>
	);
};
