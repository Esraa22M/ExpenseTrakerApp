import { StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles.constants";
export const styles = StyleSheet.create({
	buttonContainer: {
		borderRadius: 4,
		padding: 8,
		borderWidth: 2,
		borderColor: GlobalStyles.colors.primary100,
		backgroundColor: GlobalStyles.colors.primary100,
	},
	flat: { backgroundColor: "transparent" },
	buttonText: { textAlign: "center", color: 'white' },
    flatText:{color:GlobalStyles.colors.primary100}
	, pressed:{opacity:0.5, borderRadius:4, backgroundColor:GlobalStyles.colors.dark100}
});
