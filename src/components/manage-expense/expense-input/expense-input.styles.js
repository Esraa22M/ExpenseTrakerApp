import { StyleSheet } from "react-native";
import { GlobalStyles } from "../../../constants/styles.constants";
export const styles = StyleSheet.create({
	inputContainer: { marginHorizontal: 4, marginVertical: 16 },
	label: { fontSize: 12, color: GlobalStyles.colors.dark100, marginBottom: 4 },
	input: {
		borderBottomWidth: 2,
		borderBottomColor: GlobalStyles.colors.primary100,
		padding: 6,
		fontSize: 18,
		color: GlobalStyles.colors.dark100,
	},
    inputMultipleLine: { minHeight: 100, textAlignVertical: "top", },
	labelInValid: {color:GlobalStyles.colors.error},
	inputInValid:{borderBottomColor:GlobalStyles.colors.error}
});
