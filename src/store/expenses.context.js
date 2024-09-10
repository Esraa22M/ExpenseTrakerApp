import { createContext, useEffect, useReducer } from "react";
import { ExpensesReducer } from "./reducers/expenses.reducers";
import { dummyData } from "../backend/data";
export const ExpensesContext = createContext({
	expenses: [],
	setExpenses: (expenses) => {},
	addExpense: ({ title, description, amount, date }) => {},
	deleteExpense: (id) => {},
	updateExpense: (id, { tiltle, description, amount, date }) => {},
});

export const ExpenseContextProvider = ({ children }) => {
	const [expensesState, dispatch] = useReducer(ExpensesReducer, []);
	addExpense = (expenseData) => {
		dispatch({ type: "ADD", payload: expenseData });
	};
	setExpenses = (expenses) => {
		dispatch({ type: "SET", payload: expenses });
	};
	deleteExpense = (id) => {
		dispatch({ type: "DELETE", payload: id });
	};
	updateExpense = (id, expenseData) => {
		dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
	};
	value = {
		expenses: expensesState,
		setExpenses: setExpenses,
		addExpense: addExpense,
		deleteExpense: deleteExpense,
		updateExpense: updateExpense,
	};
	return (
		<ExpensesContext.Provider value={value}>
			{children}
		</ExpensesContext.Provider>
	);
};
