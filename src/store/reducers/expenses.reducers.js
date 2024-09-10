export const ExpensesReducer = (state, action) => {
	switch (action.type) {
		case "ADD":
			//const id = new Date().toString() + Math.random().toString();
			return [{ ...action.payload}, ...state];
		case "SET": return action.payload;
		case "UPDATE":
			const updatableExpenseIndex = state.findIndex(
				(item) => item.id === action.payload.id
			);
			const updatedExpenseItem = state[updatableExpenseIndex];
			const updatedItem = { ...updatedExpenseItem, ...action.payload.data };
			const updatedExpenses = [...state];
			updatedExpenses[updatableExpenseIndex] = updatedItem;
			return updatedExpenses;
		case "DELETE":
			return state.filter((item) => item.id !== action.payload);
		default:
			return state;
	}
};
