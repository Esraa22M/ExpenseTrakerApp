import { TextInput, View, Text } from "react-native";
import { styles } from "./expense-input.styles";
export const ExpenseInput = ({ label, textInputConfig , invalid}) => {
	const inputStyles = [styles.input];
    
	if (textInputConfig && textInputConfig.multiline) {
		inputStyles.push(styles.inputMultipleLine);
	}
	if(invalid){inputStyles.push(styles.inputInValid)}
	return (
		<View style={styles.inputContainer}>
			<Text style={[styles.label, invalid&&styles.labelInValid]}>{label}</Text>
			<TextInput {...textInputConfig} style={inputStyles} />
		</View>
	);
};
