import { StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles.constants";
export const Styles = StyleSheet.create({
	outerContainer: { flex: 1, backgroundColor: GlobalStyles.colors.primary100 },
	innerContainer: {
		padding: 20,
		flex: 1,
		backgroundColor: GlobalStyles.colors.primary50,
		borderTopRightRadius: 30,
		borderTopLeftRadius: 30,
		marginTop: 10,
	},
});
