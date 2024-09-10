import { StyleSheet, View } from "react-native";
import { useContext } from "react";
import { ExpenseInput } from "../../manage-expense/expense-input/expenses-input.components";
import { Button } from "../../../ui/button/button.components";
import { AuthContext } from "../../../store/auth.context";
export const AuthForm = ({ isLogin }) => {
	const { formInputs, formSubmitHandler, setformInputs } =
		useContext(AuthContext);
	const inputChangeHandler = (inputIdentifier, enteredValue) => {
		setformInputs((current) => {
			return {
				...current,
				[inputIdentifier]: { value: enteredValue, isValid: true },
			};
		});
	};
	return (
		<View>
			<View>
				<ExpenseInput
					label={"Email"}
					invalid={!formInputs.email.isValid}
					textInputConfig={{
						keyboardType: "email-address",
						value: formInputs.email.value,
						onChangeText: inputChangeHandler.bind(this, "email"),
					}}
				/>
				{!isLogin && (
					<ExpenseInput
						label={"Confirm Email"}
						invalid={!formInputs.confirmEmail.isValid}
						textInputConfig={{
							keyboardType: "email-address",
							value: formInputs.confirmEmail.value,
							onChangeText: inputChangeHandler.bind(this, "confirmEmail"),
						}}
					/>
				)}
				<ExpenseInput
					label={"Password"}
					invalid={!formInputs.password.isValid}
					textInputConfig={{
						secureTextEntry:true,
						value: formInputs.password.value,
						onChangeText: inputChangeHandler.bind(this, "password"),
					}}
				/>
				{!isLogin && (
					<ExpenseInput
						label={"Confirm Password"}
						invalid={!formInputs.confirmPassword.isValid}
						textInputConfig={{
							secureTextEntry:true,
							value: formInputs.confirmPassword.value,
							onChangeText: inputChangeHandler.bind(this, "confirmPassword"),
						}}
					/>
				)}
				<View style={styles.buttonContainer}>
					<Button onPress={formSubmitHandler}>{isLogin ? "Log In" : "Sin Up"}</Button>
				</View>
			</View>
		</View>
	);
};
const styles = StyleSheet.create({ buttonContainer: { marginTop: 12 } });
