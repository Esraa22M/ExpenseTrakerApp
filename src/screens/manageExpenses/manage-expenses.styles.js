import { StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles.constants";
export const styles = StyleSheet.create({
	container: { flex: 1, padding: 24 },
	buttonsContainer: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	deletedContainer: {
		marginTop: 16,
		paddingTop: 8,
		borderTopWidth: 2,
		alignItems: "center",
		borderTopColor: GlobalStyles.colors.dark100,
	},
	outerContainerStyle:{minWidth:120 , marginHorizontal:8}
});
