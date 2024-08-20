import { StyleSheet } from "react-native";
import { GlobalStyles } from "../../../constants/styles.constants";
export const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		flexWrap: "wrap",
		marginVertical: 20,
		borderBottomWidth: 1,
		paddingVertical: 15,
		borderBottomColor: GlobalStyles.colors.primary100,
	},
	content: {
		flexDirection: "row",
		flexWrap: "wrap",
		width: "80%",
		alignItems: "center",
	},
	iconContainer: {
		width: "10%",
		justifyContent: "center",
		borderWidth: 1,
		borderColor: GlobalStyles.colors.primary20,
		borderRadius: 5,
		backgroundColor: GlobalStyles.colors.primary20,
		alignItems: "center",
		height: 40,
		marginRight: 10,
	},
	contentBoby: { width: "83%" },
	amountContainer: {
		minWidth: "17%",
		justifyContent: "flex-end",
		alignItems: "flex-end",
	},
	contentHeader: {
		fontWeight: "bold",
		color: GlobalStyles.colors.dark100,
		marginBottom: 10,
		fontSize: 15,
	},
	contentInfo: {
		fontSize: 12,
		color: GlobalStyles.colors.dark50,
		marginBottom: 10,
	},
	pressed: { opacity: 0.2, backgroundColor: GlobalStyles.colors.primary100 },
});
