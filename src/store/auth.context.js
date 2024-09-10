import { createContext, useState } from "react";
export const AuthContext = createContext({
	formInputs: {
		email: { value: "", isValid: "" },
		confirmEmail: { value: "", isValid: "" },
		password: { value: "", isValid: "" },
		confirmPassword: { value: "", isValid: "" },
	},
	formSubmitHandler: () => {},
});
export const AuthContextProvider = ({ children }) => {
	// const [inputs, setInputs] = useState({
	// 	amount: selectedExpense?selectedExpense.amount:"",
	// 	date: selectedExpense?selectedExpense.Date:"",
	// 	description:selectedExpense?selectedExpense.description: "",
	// });
	const [formInputs, setformInputs] = useState({
		email: { value: "", isValid: true },
		confirmEmail: { value: "", isValid: true },
		password: { value: "", isValid: true },
		confirmPassword: { value: "", isValid: true },
	});
	const formSubmitHandler = () => {
		const formData = {
			email: formInputs.email.value,
			confirmEmail: formInputs.confirmEmail.value,
			password: formInputs.password.value,
			confirmPassword: formInputs.confirmPassword.value,
		};
		let emailIsValid = formData.email.trim().includes("@");
		let confirmEmailIsValid = formData.confirmEmail === formData.email;
		let passwordIsValid = formData.password > 6;
		let confirmPasswordIsValid = formData.password === formData.confirmPassword;
		if (
			!emailIsValid ||
			!passwordIsValid ||
			!confirmPasswordIsValid ||
			!confirmEmailIsValid
		) {
			setformInputs((current) => {
				return {
					email: { value: current.email.value, isValid: emailIsValid },
					confirmEmail: {
						value: current.confirmEmail.value,
						isValid: confirmEmailIsValid,
					},
					password: { value: current.password.value, isValid: passwordIsValid },
					confirmPassword: {
						value: current.confirmPassword.value,
						isValid: confirmPasswordIsValid,
					},
				};
			});
			return;
		}
		return formData;
	};
	value = {
		formInputs: formInputs,
		setformInputs: setformInputs,
		formSubmitHandler: formSubmitHandler,
	};

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
