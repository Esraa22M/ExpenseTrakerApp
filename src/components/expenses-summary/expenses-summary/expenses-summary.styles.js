import { StyleSheet } from "react-native";
import { GlobalStyles } from "../../../constants/styles.constants";

export const Styles = StyleSheet.create({
	container: { padding: 8, justifyContent: "center", alignItems: "center" },
	summaryPeriodTime: {
		paddingBottom: 20,
		color: GlobalStyles.colors.dark100,
		fontSize: 20,
		fontWeight: "bold",
		fontFamily: "Inter-Black",
		textAlign: "center",
	},
	summaryTotal: {
		color: GlobalStyles.colors.dark100,
		width: "60%",
		fontFamily: "Inter-Black",
		textAlign: "center",
		borderBottomColor: GlobalStyles.colors.dark50,
		padding: 20,
		fontWeight: "bold",
		fontSize: 30,
		borderBottomWidth: 2,
	},
});
