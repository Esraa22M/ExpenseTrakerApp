import { View, Text, StyleSheet } from "react-native";
import { Button } from "./button/button.components";
export const ErrorOverLay = ({message , onConfirm}) => {
	return (
		<View style={styles.container}>
			<Text style={[styles.text, styles.title]}>An error occured!!</Text>
			<Text style={styles.text}>{ message}</Text>
			<Button onPress={onConfirm}>ok</Button>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		padding: 24,
	},
	text: { marginBottom: 8, textAlign: "center" },
	title: { fontSize: 20, fontWeight: "bold" },
});
