import { createContext, useState } from "react";
export const InputContext = createContext({
	inputs: {
		title: { value: "", isValid: true },
		amount: { value: "", isValid: true },
		date: { value: "", isValid: true },
		description: { value: "", isValid: true },
	},
	formSubmitHandler: () => {},
});
export const InputsContextProvider = ({ children }) => {
	// const [inputs, setInputs] = useState({
	// 	amount: selectedExpense?selectedExpense.amount:"",
	// 	date: selectedExpense?selectedExpense.Date:"",
	// 	description:selectedExpense?selectedExpense.description: "",
	// });
	const [inputs, setInputs] = useState({
		title: { value: "", isValid: true },
		amount: { value: "", isValid: true },
		date: { value: "", isValid: true },
		description: { value: "", isValid: true },
	});
	const formSubmitHandler = () => {
		const expenseData = {
			title: inputs.title.value,
			amount: +inputs.amount.value,
			date: new Date(inputs.date.value),
			description: inputs.description.value,
		};
		let titleIsValid = expenseData.title.length > 0;
		let amountIsValid = expenseData.amount > 0 && !isNaN(expenseData.amount);
		let dateIsValid = expenseData.date.toString() !== "Invalid Date";
		let descriptionIsValid = expenseData.description.trim().length > 0;
		if (
			!titleIsValid ||
			!amountIsValid ||
			!dateIsValid ||
			!descriptionIsValid
		) {
			setInputs((current) => {
				return {
					title: { value: current.title.value, isValid: titleIsValid },
					amount: { value: current.amount.value, isValid: amountIsValid },
					date: { value: current.date.value, isValid: dateIsValid },
					description: {
						value: current.description.value,
						isValid: descriptionIsValid,
					},
				};
			});
			return;
		}
		return expenseData;
	};
	value = {
		inputs: inputs,
		setInputs: setInputs,
		formSubmitHandler: formSubmitHandler,
	};

	return (
		<InputContext.Provider value={value}>{children}</InputContext.Provider>
	);
};
