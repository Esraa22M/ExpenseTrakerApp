import axios from "axios";
const BASE_URL = `https://expenses-app-a95f6-default-rtdb.firebaseio.com/`;
export const storeExpense = async (expenseObj) => {
	const response = await axios.post(`${BASE_URL}/expenses.json`, expenseObj);
	const id = response.data.name;
	return id;
};
export const getExpenses = async () => {
	const { data } = await axios.get(`${BASE_URL}/expenses.json`);
	console.log("yarab", data);
	const expensesList = [];
	for (const key in data) {
		const expenseObj = {
			id: key,
			title: data[key].title,
			amount: data[key].amount,
			date: new Date(data[key].date),
			description: data[key].description,
		};
		expensesList.push(expenseObj);
	}
	return expensesList;
};
export const updateExpensehttp = (id, expenseData) => {
	return axios.put(`${BASE_URL}/expenses/${id}.json`, expenseData);
};
export const deleteExpensehttp = (id) => {
	return axios.delete(`${BASE_URL}/expenses/${id}.json`);
};
